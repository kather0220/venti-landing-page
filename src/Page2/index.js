import * as S from './styles';
import React from 'react';

function Page2() {
  return (
    <S.Container>
      <S.TopTextBalloon>
        관심없는 <colored>이벤트 광고</colored>에 괴로웠던 적 있나요?
      </S.TopTextBalloon>
      <S.TopTextBalloonTail
        src={process.env.PUBLIC_URL + 'Vector1.png'}
      ></S.TopTextBalloonTail>
      <S.BottomTextBalloon>
        꼭 참여하고 싶던 <colored>이벤트를 놓친 경험</colored>이 있으신가요?
      </S.BottomTextBalloon>
      <S.BottomTextBalloonTail
        src={process.env.PUBLIC_URL + 'Vector2.png'}
      ></S.BottomTextBalloonTail>
    </S.Container>
  );
}

export default Page2;
