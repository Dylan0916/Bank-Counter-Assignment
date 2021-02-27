import { useEffect, useRef, useState } from 'react';

import { bankProcess$ } from '../../utils/bankHelpers';
import ProcessItem from './ProcessItem';
import { S } from './styles';
import { FieldType } from './types';

// const names = ['Amy', 'Bob', 'Cory', 'Dora'];
const names = ['Amy'];
const headItem = [FieldType.Counter, FieldType.Processing, FieldType.Processed];

export default function BankContent() {
  const [numberPlate, setNumberPlate] = useState(1);
  const queue = useRef<number[]>([]);
  const [waitings, setWaitings] = useState<number[]>([]);

  const onNumberPlateClick = () => {
    setWaitings(prev => prev.concat(numberPlate));
    setNumberPlate(prev => prev + 1);
  };

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
    return names.map(name => {
      return <ProcessItem key={name} name={name} />;
    });
  };

  useEffect(() => {
    // bankProcess$.subscribe(({ queueList }) => {});
  }, []);

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
