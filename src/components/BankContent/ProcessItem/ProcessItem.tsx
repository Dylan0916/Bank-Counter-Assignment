import { useState } from 'react';

import { S } from '../styles';
import { FieldType } from '../types';

interface Props {
  name: string;
}

export default function ProcessItem(props: Readonly<Props>) {
  const { name } = props;
  const [processed, setProcessed] = useState([
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
  ]);

  return (
    <S.Tr>
      <S.Td type={FieldType.Counter}>{name}</S.Td>
      <S.Td type={FieldType.Processing}>12</S.Td>
      <S.Td type={FieldType.Processed}>{processed.join(',')}</S.Td>
    </S.Tr>
  );
}
