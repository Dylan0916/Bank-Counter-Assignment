import BankContent from '../BankContent';
import { S } from './styles';

function App() {
  return (
    <div>
      <S.Title>Bank Counter</S.Title>
      <BankContent />
      <S.BottomSection>
        <S.Waitings>waitings: 18</S.Waitings>
        <S.ActionBtn>NEXT 33</S.ActionBtn>
      </S.BottomSection>
    </div>
  );
}

export default App;
