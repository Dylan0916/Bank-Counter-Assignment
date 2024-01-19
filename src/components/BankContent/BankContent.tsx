import React, { useCallback, useEffect, useState } from 'react';

import { QueueContent } from '../../types/misc';
import { queueSubject$ } from '../../utils/bankHelpers';
import ContentHeader from './ContentHeader';
import ProcessItem from './ProcessItem';
import { S } from './styles';

const names: string[] = JSON.parse(process.env.REACT_APP_NAMES + '');

export default function BankContent() {
  const [numberPlate, setNumberPlate] = useState(1);
  const [queue, setQueue] = useState<QueueContent[]>([]);
  const [waitings, setWaitings] = useState<number[]>([]);

  const onNumberPlateClick = () => {
    if (queue.length > 0) {
      const copiedQueue = [...queue];
      const firstEle = copiedQueue.shift();

      firstEle?.execute(numberPlate);
      setQueue(copiedQueue);
    } else {
      setWaitings(prev => prev.concat(numberPlate));
    }
    setNumberPlate(prev => prev + 1);
  };

  const setQueueCallback = useCallback((value: QueueContent) => {
    setQueue(prev => prev.concat(value).sort((a, b) => a.index - b.index));
  }, []);

  const renderContent = () => {
    return names.map((name, index) => (
      <ProcessItem
        key={name}
        name={name}
        index={index}
        setQueue={setQueueCallback}
      />
    ));
  };

  useEffect(() => {
    const process = queueSubject$.subscribe(({ execute, index }) => {
      if (waitings.length > 0) {
        const copiedWaitings = [...waitings];
        const number = copiedWaitings.shift();

        if (typeof number !== 'undefined') {
          execute(number);
        }
        setWaitings(copiedWaitings);
      } else {
        setQueueCallback({ execute, index });
      }
    });

    return () => {
      if (process) {
        process.unsubscribe();
      }
    };
  }, [waitings, setQueueCallback]);

  return (
    <S.Container>
      <S.Table>
        <ContentHeader />
        {renderContent()}
      </S.Table>
      <S.BottomSection>
        <S.Waitings>waitings: {waitings.length}</S.Waitings>
        <S.NumberPlateBtn onClick={onNumberPlateClick}>
          NEXT {numberPlate}
        </S.NumberPlateBtn>
      </S.BottomSection>
    </S.Container>
  );
}
