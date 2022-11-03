import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { timeCa, zero } from "../../util/changeTime";
import { Tag } from "@kimuichan/ui-base";
import dayjs from "dayjs";

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

  return (
    <BoxStyle>
      <TextStyle>
        {department}
        <NameStyle>{v.nickname}</NameStyle>
      </TextStyle>
      <TimeStyle>
        {v.startTime &&
          zero(time.hour()) +
            ":" +
            zero(time.minute()) +
            ":" +
            zero(time.second())}
      </TimeStyle>
      <BtnAreaStyle>
        <Tag color={v.workingMode === "COMPANY" ? "green" : "black"}>
          근무중
        </Tag>
        <Tag color="black">재택근무</Tag>
      </BtnAreaStyle>
    </BoxStyle>
  );
};

export default Item;
