import { memo, useEffect, useState } from 'react';

import { ExecuteCallback } from '../../../types/misc';
import { bankProcess$ } from '../../../utils/bankHelpers';
import { S } from '../styles';
import { FieldType } from '../types';

interface Props {
  name: string;
  setQueue: (callback: ExecuteCallback) => void;
}

function ProcessItem(props: Readonly<Props>) {
  const { name, setQueue } = props;
  const [processing, setProcessing] = useState<number | null>(null);
  const [processed, setProcessed] = useState<number[]>([]);

  const execute = (number: number) => {
    setProcessing(number);
  };

  useEffect(() => {
    setQueue(execute);
  }, []);

  useEffect(() => {
    if (processing !== null) {
      const waitSecond = Math.random() * 1.5 + 0.5;

      setTimeout(() => {
        setProcessing(null);
        setProcessed(prev => prev.concat(processing));
        bankProcess$.next(execute);
      }, waitSecond * 3000);
    }
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
