import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { zero, timeCa } from "../../util/changeTime";
import { Button } from "@kimuichan/ui-base";
import { deleteAttend, postAttend, postAuth } from "../../api/Auth/Auth.api";
import { useMutation } from "react-query";

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  font-family: "Inter";
  font-style: normal;
  color: #000000;

  /* margin-top: 100px; */

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
  /* identical to box height */

  color: #000000;
  margin: 0;
`;

const Loading = styled.div`
  font-size: 30px;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Time = ({
  startTime,
  infoRefetch,
  workingStatus,
  isLoading,
  isGoneToWork,
  coreStartTime,
  coreReason,
  coreEndTime,
}) => {
  const attend = async () => {
    let data;
    if (!workingStatus || workingStatus === "LEAVE") {
      data = await postAttend();
    } else {
      data = await deleteAttend();
    }
    // const res = await postAuth();
  };
  const { mutate } = useMutation(attend, {
    onSuccess: () => infoRefetch(),
  });

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <TimeContainer>
      {isGoneToWork && workingStatus !== "LEAVE" && (
        <p className="p">퇴근까지</p>
      )}
      <SelectType
        startTime={startTime}
        workingStatus={workingStatus}
        isGoneToWork={isGoneToWork}
        coreStartTime={coreStartTime}
        coreEndTime={coreEndTime}
        coreReason={coreReason}
      />
      <Button
        color={workingStatus && workingStatus !== "LEAVE" ? "black" : "green"}
        size="lg"
        onClick={mutate}
      >
        {workingStatus && workingStatus !== "LEAVE" ? "퇴근" : "출근"}
      </Button>
    </TimeContainer>
  );
};

const SelectType = ({
  startTime,
  workingStatus,
  isGoneToWork,
  coreStartTime,
  coreReason,
  coreEndTime,
}) => {
  return (
    <TimeWrite>
      {isGoneToWork && workingStatus && workingStatus !== "LEAVE" && (
        <Work startTime={startTime} />
      )}
      {/* {isWorking && "+01:02:17"} */}
      {isGoneToWork &&
        (!workingStatus || workingStatus === "LEAVE") &&
        "편안한 휴식 하세요!"}
      {!isGoneToWork && coreStartTime !== null && (
        <Core
          coreStartTime={coreStartTime}
          coreEndTime={coreEndTime}
          coreReason={coreReason}
        />
      )}
      {!isGoneToWork && coreStartTime === null && <div>08:00:00</div>}
    </TimeWrite>
  );
};

const CoreContainer = styled.ul`
  list-style: none;
  text-align: left;
  > li {
    font-size: 45px;
    margin: 0;
    padding: 0;
  }

  margin-bottom: 20px;
`;
const Core = ({ coreStartTime, coreReason, coreEndTime }) => {
  return (
    <CoreContainer>
      <li>시작시간: {coreStartTime}</li>
      <li>종료시간: {coreEndTime}</li>
      <li>사유: {coreReason}</li>
    </CoreContainer>
  );
};

const Work = ({ startTime }) => {
  const [time, setTime] = useState(timeCa(startTime));

  useEffect(() => {
    if (startTime) {
      setInterval(() => {
        setTime((prev) => {
          return prev.subtract(1, "second");
        });
      }, 1000);
    }
  }, []);

  return (
    <div>
      {zero(time.hour()) +
        ":" +
        zero(time.minute()) +
        ":" +
        zero(time.second())}
    </div>
  );
};

export default Time;
