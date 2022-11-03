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
  line-height: 155px;
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

const Time = ({ startTime, infoRefetch, workingStatus, isLoading }) => {
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
      {workingStatus !== "LEAVE" && <p className="p">퇴근까지</p>}
      <SelectType startTime={startTime} workingStatus={workingStatus} />
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

const SelectType = ({ startTime, workingStatus }) => {
  return (
    <TimeWrite>
      {workingStatus && workingStatus !== "LEAVE" && (
        <Work startTime={startTime} />
      )}
      {/* {isWorking && "+01:02:17"} */}
      {(!workingStatus || workingStatus === "LEAVE") && "편안한 휴식 하세요!"}
    </TimeWrite>
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
