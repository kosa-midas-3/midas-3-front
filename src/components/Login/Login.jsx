import React, { useState } from "react";
import styled from "styled-components";

const LoginStyle = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 0 10px #ddd;
  border-radius: 10px;
`;

const TitleStyle = styled.div`
  width: 430px;
  display: flex;
  font-size: 60px;
  align-items: center;
`;

const TextStyle = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

const InputStyle = styled.input`
  width: 430px;
  height: 50px;
  border: 3px solid #eee;
  border-radius: 10px;
  margin-bottom: 50px;
`;

const BtnStyle = styled.button`
  width: 430px;
  height: 58px;
  border: none;
  background-color: #28c700b0;
  font-size: 23px;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  margin-bottom: 30px;
  cursor: pointer;
`;

const Login = () => {
  const [nickName, setNickName] = useState("");
  
  const onClickHandler = () => {
    localStorage.setItem("nickName", nickName);
  }

  return (
    <LoginStyle>
      <TitleStyle>
      👋<TextStyle>닉네임을 입력하여 <br /> 로그인하세요</TextStyle>
      </TitleStyle>
      <InputStyle onChange={e => setNickName(e.target.value)} value={nickName} />
      <BtnStyle onClick={onClickHandler}>로그인</BtnStyle>
    </LoginStyle>
  );
}

export default Login;