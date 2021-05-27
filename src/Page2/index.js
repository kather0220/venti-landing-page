import * as S from './styles';
import React from 'react';

function Page2() {
  return (
    <S.Container>
      <S.TopTextBalloon>
        <img src={process.env.PUBLIC_URL + 'text1.png'}></img>
      </S.TopTextBalloon>
      <S.TopTextBalloonTail
        src={process.env.PUBLIC_URL + 'Vector1.png'}
      ></S.TopTextBalloonTail>
      <S.BottomTextBalloon>
        <img src={process.env.PUBLIC_URL + 'letter3.png'}></img>
      </S.BottomTextBalloon>
      <S.BottomTextBalloonTail
        src={process.env.PUBLIC_URL + 'Vector2.png'}
      ></S.BottomTextBalloonTail>
    </S.Container>
  );
}

export default Page2;
