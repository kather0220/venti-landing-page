import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 41.623309vw;
  left: 0vw;
  top: 0vw;
  background: #f40552;
`;

export const UpperTitle = styled.div`
  position: absolute;
  height: 7.8125vw;
  left: 10.364583vw;
  top: 6.71875vw;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 8.571rem;
  line-height: 8.4895833vw;
  color: #ffffff;
`;

export const LowerTitle = styled.div`
  position: absolute;
  height: 7.5vw;
  left: 10.3645833vw;
  top: 14.53125vw;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 8.571rem;
  line-height: 8.4895833vw;
  color: #ffffff;
`;

export const Exp = styled.div`
  position: absolute;
  height: 5.9375vw;
  left: 10.3645833vw;
  top: 26.9270833vw;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 2.857rem;
  line-height: 2.96875vw;
  color: #ffffff;

  & bold {
    display: inline;
    font-weight: 700;
  }
`;
