import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 56.25vw;
  left: 0vw;
  top: 0vw;
  background: #fafafa;
`;

export const TopTextBalloon = styled.div`
  position: absolute;
  width: 74.2057vw;
  height: 11.875vw;
  line-height: 11.875vw;
  left: 13.867vw;
  top: 12.708vw;
  text-align: center;
  vertical-align: middle;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 3.833rem;
  background: #ffffff;
  box-shadow: 0.2083vw 0.2083vw 1.041666vw 0.52083vw rgba(91, 79, 106, 0.07);
  border-radius: 1.3020833vw;

  & colored {
    display: inline;
    color: #f40552;
  }
`;

export const TopTextBalloonTail = styled.img`
  position: absolute;
  width: 4.84375vw;
  height: 4.0104167vw;
  left: 11.8229vw;
  top: 20.57vw;
`;

export const BottomTextBalloon = styled.div`
  position: absolute;
  width: 73.3978vw;
  height: 11.875vw;
  text-align: center;
  line-height: 11.875vw;
  left: 14.7917vw;
  top: 31.6667vw;
  bottom: 12.70833vw;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 3.833rem;
  background: #ffffff;
  box-shadow: 0.2083vw 0.2083vw 1.041666vw 0.52083vw rgba(91, 79, 106, 0.07);
  border-radius: 1.3020833vw;

  & colored {
    display: inline;
    color: #f40552;
  }
`;

export const BottomTextBalloonTail = styled.img`
  position: absolute;
  width: 4.996875vw;
  height: 4.0104vw;
  left: 85.41979vw;
  top: 39.53125vw;
`;
