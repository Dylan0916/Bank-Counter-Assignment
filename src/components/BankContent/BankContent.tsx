import { useCallback, useEffect, useState } from 'react';

import { ExecuteCallback } from '../../types/misc';
import { bankProcess$ } from '../../utils/bankHelpers';
import ProcessItem from './ProcessItem';
import { S } from './styles';
import { FieldType } from './types';

const names = ['Amy', 'Bob', 'Cory', 'Dora'];
// const names = ['Amy'];
const headItem = [FieldType.Counter, FieldType.Processing, FieldType.Processed];

export default function BankContent() {
  const [numberPlate, setNumberPlate] = useState(1);
  const [queue, setQueue] = useState<ExecuteCallback[]>([]);
  const [waitings, setWaitings] = useState<number[]>([]);

  const onNumberPlateClick = () => {
    if (queue.length > 0) {
      const newQueue = [...queue];
      const execute = newQueue.shift();

      execute!(numberPlate);
      setQueue(newQueue);
    } else {
      setWaitings(prev => prev.concat(numberPlate));
    }
    setNumberPlate(prev => prev + 1);
  };

  const setQueueCallback = useCallback((callback: ExecuteCallback) => {
    setQueue(prev => prev.concat(callback));
  }, []);

  const renderHeader = () => {
    return (
      <S.Tr>
        {headItem.map(item => (
          <S.Td isHead type={item} key={item}>
            {item}
          </S.Td>
        ))}
      </S.Tr>
    );
  };

  const renderContent = () => {
    return names.map(name => (
      <ProcessItem key={name} name={name} setQueue={setQueueCallback} />
    ));
  };

  useEffect(() => {
    const process = bankProcess$.subscribe(callback => {
      if (waitings.length > 0) {
        const newWaitings = [...waitings];
        const number = newWaitings.shift();

        callback(number!);
        setWaitings(newWaitings);
      } else {
        setQueueCallback(callback);
      }
    });

    return () => {
      if (process) {
        process.unsubscribe();
      }
    };
  }, [waitings]);

  return (
    <S.Container>
      <S.Table>
        {renderHeader()}
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
