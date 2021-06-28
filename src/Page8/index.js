import * as S from './styles';
import React, { useState, useRef } from 'react';
import axios from 'axios';

function Page8() {
  const [emailInput, setEmailInput] = useState('');
  const [loading, setLoading] = useState(false);
  const EmailInputBox = useRef();
  const saveInput = (e) => {
    setEmailInput(e.target.value);
  };
  const checkEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };
  const handleApply = async (e) => {
    e.preventDefault();
    if (emailInput && checkEmail(emailInput)) {
      setLoading(true);

      await axios.get(
        `https://script.google.com/macros/s/AKfycbw_I_ug8T-noAgbFFwvZ3nMYeKrUxWRZ3eMesqtV-rOVqb0KHVPLpzIZ4uHpTiH30cRkg/exec`,
        {
          params: { Email: emailInput },
        }
      );
      alert('등록되었습니다.\n감사합니다.');
      setLoading(false);
      EmailInputBox.current.value = '';
    } else {
      alert('유효하지 않은 이메일입니다.');
    }
  };

  return (
    <S.Container>
      <S.StyledImage src={process.env.PUBLIC_URL + 'img4.png'}></S.StyledImage>
      <S.Exp>
        Venti에서 이벤트의 개인 맞춤화 시작해요!<br></br>Make your own Venti
      </S.Exp>
      <S.EmailInputBox
        type="text"
        placeholder="example@gmail.com"
        id="Email"
        onChange={saveInput}
        ref={EmailInputBox}
        disabled={loading ? true : false}
      ></S.EmailInputBox>
      <S.ApplyButton onClick={handleApply}>
        <venti>Venti</venti> 체험판 신청
      </S.ApplyButton>
    </S.Container>
  );
}

export default Page8;
