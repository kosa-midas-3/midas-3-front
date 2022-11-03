import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { timeCa, zero } from "../../util/changeTime";
import { Tag } from "@kimuichan/ui-base";
import dayjs from "dayjs";

const BoxStyle = styled.div`
  width: 200px;
  height: 200px;
  padding: 0 15px;
  border: 2px solid ${(props) => (props.time === "green" ? "#6cdc84" : "#ccc")};
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
  text-align: center;
  line-height: 25px;
`;

const Item = ({ v, department }) => {
  const [time, setTime] = useState(timeCa(v.startTime));

  useEffect(() => {
    if (time) {
      setInterval(() => {
        setTime((prev) => {
          return prev.subtract(1, "second");
        });
      }, 1000);
    }
  }, []);

  const obj = {
    GO: "green",
    LEAVE: "gray",
  };

  return (
    <BoxStyle
      time={v.startTime && v.workingStatus !== "LEAVE" ? "green" : "gray"}
    >
      <TextStyle>
        {department}
        <NameStyle>{v.nickname}</NameStyle>
      </TextStyle>
      <TimeStyle>
        {v.startTime && v.workingStatus !== "LEAVE"
          ? zero(time.hour()) +
            ":" +
            zero(time.minute()) +
            ":" +
            zero(time.second())
          : "충전하는 중"}
      </TimeStyle>
      <BtnAreaStyle>
        <Tag color={obj[v.workingStatus]}>근무중</Tag>
        <Tag color={v.workingMode === "COMPANY" ? "blackBorder" : "black"}>
          {v.workingMode !== "COMPANY" ? "재택근무" : "회사근무"}
        </Tag>
      </BtnAreaStyle>
    </BoxStyle>
  );
};

export default Item;
