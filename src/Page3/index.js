import * as S from './styles';
import React from 'react';

function Page3() {
  return (
    <S.Container>
      <S.StyledImage src={process.env.PUBLIC_URL + 'img1.png'}></S.StyledImage>
      <S.TopText>
        개인맞춤<br></br>카테고리 필터링
      </S.TopText>
      <S.BottomText>
        내가 볼 이벤트와 광고를 직접!선택해요
        <br></br>상품,브랜드 별로 내가 선호하는
        <br></br>카테고리만을 볼 수 있어요
      </S.BottomText>
    </S.Container>
  );
}

export default Page3;
