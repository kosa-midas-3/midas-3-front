import React from "react";
import { CalItemNum, CalLi, CalUl } from "./Calendar";

const CalUl = () => {
  return (
    <CalItem>
      <CalItemNum>{idx + 1}</CalItemNum>
      <CalUl>
        <CalLi>회의</CalLi>
      </CalUl>
    </CalItem>
  );
};

export default CalUl;
