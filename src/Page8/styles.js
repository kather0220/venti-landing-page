import styled from 'styled-components';

export const Container = styled.form`
  position: relative;
  width: 100%;
  height: 56.25vw;
  left: 0vw;
  top: 0vw;
  background: #ffffff;
`;

export const StyledImage = styled.img`
  position: absolute;
  width: 100%;
`;

export const Exp = styled.div`
  position: absolute;
  height: 6.041667vw;
  top: 29.79vw;

  font-family: Noto Sans KR Bold;
  font-style: normal;
  font-weight: normal;
  font-size: 2.857rem;
  line-height: 3.020833vw;
  left: 31.1354167vw;
  text-align: center;

  color: #000000;
`;

export const EmailInputBox = styled.input`
  position: absolute;
  width: 36.770833vw;
  height: 3.28125vw;
  left: 31.6145833vw;
  top: 38.1770833vw;
  background: ${(props) =>
    props.disabled ? '#f5f5f5 url(Spinner.gif) right no-repeat' : '#f5f5f5'};
  background-size: 4vw;
  border: 0.0052vw solid #b0b0b0;
  box-sizing: border-box;
  border-radius: 3.125vw;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 2.429rem;
  line-height: 3.28125vw;
  text-align: center;
  color: black;

  &::placeholder {
    color: #a8a8a8;
    letter-spacing: 0.07rem;
  }

  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const ApplyButton = styled.button`
  position: absolute;
  width: 30.7vw;
  text-align: center;
  height: 5.78125vw;
  line-height: 5.78125vw;
  left: 34.6354vw;
  top: 44.5833vw;
  border-radius: 1.5625vw;
  background: #f40552;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 3.229rem;
  color: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  & venti {
    letter-spacing: 0.1rem;
  }
`;
