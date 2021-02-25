import ProcessItem from './ProcessItem';
import { S } from './styles';

const names = ['Amy', 'Bob', 'Cory', 'Dora'];

export default function BankContent() {
  return (
    <S.Table>
      <S.Tr>
        <S.Th>counter</S.Th>
        <S.Th>processing</S.Th>
        <S.Th>processed</S.Th>
      </S.Tr>
      {names.map(name => (
        <ProcessItem key={name} name={name} />
      ))}
    </S.Table>
  );
}
