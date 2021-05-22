import * as S from './styles';
import React from 'react';

function Page4() {
  return (
    <S.Container>
      <S.UpperTitle>Filter it</S.UpperTitle>
      <S.LowerTitle>Just for you</S.LowerTitle>
      <S.Exp>
        당신이 <bold>관심있는 브랜드</bold>의<br></br>이벤트 정보만 모아{' '}
        <bold>간편하게!</bold>
      </S.Exp>
    </S.Container>
  );
}

export default Page4;
