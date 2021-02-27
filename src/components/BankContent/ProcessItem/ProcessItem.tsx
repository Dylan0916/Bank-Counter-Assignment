import { memo, useEffect, useState } from 'react';

import { bankProcess$ } from '../../../utils/bankHelpers';
import { S } from '../styles';
import { FieldType } from '../types';

interface Props {
  name: string;
}

function ProcessItem(props: Readonly<Props>) {
  const { name } = props;
  const [processing, setProcessing] = useState<number | null>(null);
  const [processed, setProcessed] = useState<number[]>([]);

  useEffect(() => {
    const bankProcess = bankProcess$.subscribe(({ target, processNumber }) => {
      if (target === name) {
        setProcessing(processNumber);
      }
    });

    return () => {
      if (bankProcess) {
        bankProcess.unsubscribe();
      }
    };
  }, [processing]);

  useEffect(() => {
    if (processing !== null) {
      const waitSecond = Math.random() * 1.5 + 0.5;

      setTimeout(() => {
        setProcessing(null);
        setProcessed(prev => prev.concat(processing));
      }, waitSecond * 1000);
    }
  }, [processing]);

  return (
    <S.Tr>
      <S.Td type={FieldType.Counter}>{name}</S.Td>
      <S.Td type={FieldType.Processing}>{processing ?? 'idle'}</S.Td>
      <S.Td type={FieldType.Processed}>{processed.join(',')}</S.Td>
    </S.Tr>
  );
}

export default memo(ProcessItem);
