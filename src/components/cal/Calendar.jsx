import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getAttend } from "../../api/Auth/Auth.api";

const CalendarContainer = styled.div`
  width: 50%;
  height: 90%;
`;

const CalHeader = styled.div`
  display: flex;
  align-items: center;

  width: 200px;
  gap: 5px;

  color: white;

  margin-bottom: 10px;
`;

const DateButton = styled.button`
  background: none;
  border: none;

  cursor: pointer;
  color: white;
`;

const CurrentMonth = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const CalTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-right: 15px;

  color: white;

  font-weight: 700;

  margin-bottom: 40px;
`;

const CalMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 85%;
`;
const CalItem = styled.div`
  width: 14%;
  height: 20%;
  background-color: white;
  border: 1px solid #ccc;

  /* padding: 10px; */
`;

export const CalItemNum = styled.p`
  margin: 0;
  padding-left: 10px;
  padding-top: 10px;

  font-weight: 700;
`;

export const CalUl = styled.ul`
  list-style: none;
  margin-top: 15px;
`;
export const CalLi = styled.li`
  font-size: 12px;
  padding: 2px;
  padding-left: 10px;
  background-color: red;
  color: white;
  border-radius: 5px;
  margin-bottom: 1px;
`;

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  const [info, setInfo] = useState([0, 0, 0]);

  const { data, refetch } = useQuery("getDays", () => getAttend(year, month));

  const leftClick = () => {
    if (month === 0) {
      setYear((prev) => prev - 1);
      setMonth(11);
      return;
    }
    setMonth((prev) => prev - 1);
  };

  const rightClick = () => {
    if (month === 11) {
      setYear((prev) => prev + 1);
      setMonth(0);
      return;
    }
    setMonth((prev) => prev + 1);
  };

  useEffect(() => {
    const firstDay = new Date(year, month, 1).getDay(); //이 달 1일 요일 구하기
    const lastDate = new Date(year, month + 1, 0).getDate(); // 이 달의 마지막 날짜 구하기
    const lastDay = new Date(year, month, lastDate).getDay(); // 이 달의 마지막 요일 구하기

    setInfo([firstDay, lastDate, lastDay]);
  }, [month, year]);

  return (
    <CalendarContainer>
      <CalHeader>
        <DateButton onClick={leftClick}>왼</DateButton>
        <CurrentMonth>{year + "년" + (month + 1) + "월"}</CurrentMonth>
        <DateButton onClick={rightClick}>오</DateButton>
      </CalHeader>
      <CalTop>
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </CalTop>
      <CalMain>
        {new Array(info[0]).fill(0).map((v) => (
          <CalItem />
        ))}
        {new Array(info[1]).fill(0).map((v, idx) => (
          <CalItem>
            <CalItemNum>{idx + 1}</CalItemNum>
            <CalUl>
              {/* {data.days?.map((v) => (
                <CalLi>{v ? v : ""}</CalLi>
              ))} */}
            </CalUl>
          </CalItem>
        ))}
      </CalMain>
    </CalendarContainer>
  );
};

export default Calendar;
