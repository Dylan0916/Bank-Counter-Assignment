import { useState } from 'react';

import { S } from './styles';

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
      <S.Td>{name}</S.Td>
      <S.Td>12</S.Td>
      <S.Td>
        <p>{processed.join(',')}</p>
      </S.Td>
    </S.Tr>
  );
}
