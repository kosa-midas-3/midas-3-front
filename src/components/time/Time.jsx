import React, { useEffect, useState } from "react";
import styled from "styled-components";

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

  const zero = (value) => {
    return value.toString().length < 2 ? "0" + value : value;
  };

  const minus1Second = () => {
    setTime((prev) => {
      const k = prev.split(":");
      if (Number(k[2]) > 0) {
        return k[0] + ":" + k[1] + ":" + zero(Number(k[2]) - 1);
      } else if (Number(k[2]) === 0 && Number(k[1]) > 0) {
        return k[0] + ":" + zero(Number(k[1]) - 1) + ":" + "59";
      } else if (Number(k[1]) === 0 && Number(k[0]) > 0) {
        return zero(Number(k[0]) - 1) + ":" + "59" + ":" + "59";
      }
    });
  };

  useEffect(() => {
    setInterval(() => {
      minus1Second();
    }, 1000);
  }, []);

  return <div>{time}</div>;
};

export default Time;
