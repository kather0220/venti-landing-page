import * as S from './styles';
import React from 'react';

function Page7() {
  return (
    <S.Container>
      <S.TopText>
        맞춤 이벤트를 <br></br>한눈에 한곳에서
      </S.TopText>
      <S.Exp>
        여러 이벤트를 일일이 확인할 필요 없어요!
        <br></br>분산되어 있는 모든 이벤트를
        <br></br>한 곳에서 확인할 수 있어요
      </S.Exp>
      <S.StyledImage src={process.env.PUBLIC_URL + 'img3.png'}></S.StyledImage>
    </S.Container>
  );
}

export default Page7;
