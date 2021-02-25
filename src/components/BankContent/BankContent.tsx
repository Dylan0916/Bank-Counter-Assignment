import ProcessItem from './ProcessItem';
import { S } from './styles';
import { FieldType } from './types';

const names = ['Amy', 'Bob', 'Cory', 'Dora'];
const headItem = [FieldType.Counter, FieldType.Processing, FieldType.Processed];

export default function BankContent() {
  return (
    <S.Table>
      <S.Tr>
        {headItem.map(item => (
          <S.Td isHead type={item} key={item}>
            {item}
          </S.Td>
        ))}
      </S.Tr>
      {names.map(name => (
        <ProcessItem key={name} name={name} />
      ))}
    </S.Table>
  );
}
