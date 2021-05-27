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
  height: 7.8645833vw;
  right: 11.354167vw;
  top: 7.96875vw;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 7.929rem;
  line-height: 7.8645833vw;
  letter-spacing: 0.3rem;
  color: #ffffff;
`;

export const LowerTitle = styled.div`
  position: absolute;
  height: 7.8645833vw;
  right: 10.729167vw;
  top: 15.8333vw;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 7.929rem;
  line-height: 7.8645833vw;
  letter-spacing: 0.3rem;
  color: #ffffff;
`;

export const Exp = styled.div`
  position: absolute;
  height: 6.5104167vw;
  right: 11.354167vw;
  top: 25.46875vw;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 2.857rem;
  line-height: 2.96875vw;
  text-align: right;

  color: #ffffff;

  & bold {
    display: inline;
    font-weight: 700;
  }
`;
