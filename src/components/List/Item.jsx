import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { minus1Second } from "../../util/changeTime";

const BoxStyle = styled.div`
  width: 200px;
  height: 200px;
  padding: 0 15px;
  border: 2px solid #6cdc84;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: content-box;
`;

const TextStyle = styled.p`
  margin-top: 50px;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

const NameStyle = styled.p`
  font-weight: bold;
  font-size: 30px;
  margin: 0;
`;

const TimeStyle = styled.p`
  font-weight: bold;
  font-size: 30px;
  margin: 0;
`;

const BtnAreaStyle = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;
const State1Style = styled.p`
  width: 90px;
  height: 27px;
  font-weight: bold;
  color: #fff;
  background-color: #6cdc84;
  border: none;
  border-radius: 5px;
  margin: 0;
  text-align: center;
  line-height: 25px;
`;

const State2Style = styled.p`
  width: 90px;
  height: 27px;
  font-weight: bold;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 5px;
  margin: 0;
  text-align: center;
  line-height: 25px;
`;

const Item = () => {
  const [time, setTime] = useState("08:10:17");

  useEffect(() => {
    setInterval(() => {
      minus1Second(setTime);
    }, 1000);
  }, []);

  return (
    <BoxStyle>
      <TextStyle>
        인사팀<NameStyle>김의찬</NameStyle>
      </TextStyle>
      <TimeStyle>{time}</TimeStyle>
      <BtnAreaStyle>
        <State1Style>근무중</State1Style>
        <State2Style>재택근무</State2Style>
      </BtnAreaStyle>
    </BoxStyle>
  );
};

export default Item;
