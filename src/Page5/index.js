import * as S from './styles';
import React from 'react';

function Page5() {
  return (
    <S.Container>
      <S.StyledImage src={process.env.PUBLIC_URL + 'img2.png'}></S.StyledImage>
      <S.TopText>
        이벤트 알림과<br></br>손쉬운 일정 정리
      </S.TopText>
      <S.Exp>
        알림만 있다면 이벤트를 놓칠 일은 없어요!<br></br>기한이 얼마 남지 않은
        이벤트 알림을 받고<br></br>이벤트 일정을 한눈에 정리할 수 있어요
      </S.Exp>
    </S.Container>
  );
}

export default Page5;
