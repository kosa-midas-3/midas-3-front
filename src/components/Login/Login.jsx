import React, { useState } from "react";
import styled from "styled-components";
import { getUserName } from "../../util/getUsername";
import { FullInput, useInput, FullButton } from "@kimuichan/ui-base";
const LoginStyle = styled.form`
  width: 500px;
  padding: 50px;
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

const BtnStyle = styled.button`
  width: 430px;
  height: 58px;
  border: none;
  background-color: #6cdc84;
  font-size: 23px;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  margin-bottom: 30px;
  cursor: pointer;
`;

const Login = ({ setLogin }) => {
  const [username, setUserame] = useInput("");

  const onClickHandler = () => {
    localStorage.setItem("username", username);
    setLogin(getUserName());
  };

  return (
    <LoginStyle>
      <TitleStyle>
        ๐
        <TextStyle>
          ๋น๋ฐ๋ฒํธ๋ฅผ ์๋ ฅํ์ฌ <br /> ๋ก๊ทธ์ธํ์ธ์
        </TextStyle>
      </TitleStyle>
      <FullInput
        onChange={setUserame}
        value={username}
        placeholder="๋น๋ฐ๋ฒํธ๋ฅผ ์๋ ฅํ์ธ์"
      />

      <FullButton onClick={onClickHandler}>๋ก๊ทธ์ธ</FullButton>
    </LoginStyle>
  );
};

export default Login;
