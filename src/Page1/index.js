import React from 'react';
import * as S from './styles';

function Page1() {
  return (
    <S.Container>
      <S.Title src={process.env.PUBLIC_URL + 'Title.png'}></S.Title>
      <S.Exp src={process.env.PUBLIC_URL + 'letter2.png'}></S.Exp>
    </S.Container>
  );
}

export default Page1;
