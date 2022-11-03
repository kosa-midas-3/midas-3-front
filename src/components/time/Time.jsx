import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { minus1Second } from "../../util/changeTime";

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Inter";
  font-style: normal;
  color: #000000;

  .p {
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;

    margin: 0;
  }
`;

const TimeWrite = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 128px;
  line-height: 155px;
  /* identical to box height */

  color: #000000;
  margin: 0;
`;

const Time = () => {
  return (
    <TimeContainer>
      <p className="p">퇴근까지</p>
      <SelectType type="work" />
      <button>퇴근</button>
    </TimeContainer>
  );
};

const SelectType = ({ type }) => {
  return (
    <TimeWrite>
      {type === "work" && <Work />}
      {type === "full" && "+01:02:17"}
      {type === "start" && "08:00:00"}
      {type === "end" && "편안한 휴식 하세요!"}
    </TimeWrite>
  );
};

const Work = () => {
  const [time, setTime] = useState("08:00:00");

  useEffect(() => {
    setInterval(() => {
      minus1Second(setTime);
    }, 1000);
  }, []);

  return <div>{time}</div>;
};

export default Time;
