import * as S from './styles';
import React from 'react';

function Page8() {
  return (
    <S.Container>
      <S.StyledImage src={process.env.PUBLIC_URL + 'img4.png'}></S.StyledImage>
      <S.Exp>
        Venti에서 이벤트의 개인 맞춤화 시작해요!<br></br>Make your own Venti
      </S.Exp>
      <S.ApplyButton>Venti 체험판 신청</S.ApplyButton>
    </S.Container>
  );
}

export default Page8;
