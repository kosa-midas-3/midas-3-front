import React from "react";
import styled from "styled-components";

const BoxStyle = styled.div`
  width: 200px;
  height: 200px;
  padding: 0 15px;
  border: 2px solid #6CDC84;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  background-color: #6CDC84;
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

const List = () => {
  
  return (
    <BoxStyle>
      <TextStyle>인사팀<NameStyle>김의찬</NameStyle></TextStyle>
      <TimeStyle>08:10:17</TimeStyle>
      <BtnAreaStyle>
        <State1Style>근무중</State1Style>
        <State2Style>재택근무</State2Style>
      </BtnAreaStyle>
    </BoxStyle>
  );
}

export default List;