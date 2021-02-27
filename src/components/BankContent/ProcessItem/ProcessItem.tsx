import { memo, useEffect, useState } from 'react';

import { QueueContent } from '../../../types/misc';
import { queueSubject$ } from '../../../utils/bankHelpers';
import { S } from '../styles';
import { FieldType } from '../types';

interface Props {
  name: string;
  index: number;
  setQueue: (value: QueueContent) => void;
}

function ProcessItem(props: Readonly<Props>) {
  const { name, index, setQueue } = props;
  const [processing, setProcessing] = useState<number | null>(null);
  const [processed, setProcessed] = useState<number[]>([]);

  const execute = (number: number) => {
    setProcessing(number);
  };

  useEffect(() => {
    setQueue({ execute, index });
  }, []);

  useEffect(() => {
    let timeout: null | NodeJS.Timeout = null;

    if (processing !== null) {
      const waitSecond = Math.random() * 1.5 + 0.5;

      timeout = setTimeout(() => {
        setProcessing(null);
        setProcessed(prev => prev.concat(processing));
        queueSubject$.next({ execute, index });
      }, waitSecond * 1000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [processing, execute]);

  return (
    <S.Tr>
      <S.Td type={FieldType.Counter}>{name}</S.Td>
      <S.Td type={FieldType.Processing}>{processing ?? 'idle'}</S.Td>
      <S.Td type={FieldType.Processed}>{processed.join(',')}</S.Td>
    </S.Tr>
  );
}

export default memo(ProcessItem);
