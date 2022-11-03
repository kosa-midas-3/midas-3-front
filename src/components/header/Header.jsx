import React from "react";
import styled from "styled-components";
import AtHome from "./AtHome/AtHome";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;

  padding-top: 60px;

  span {
    color: #6cdc84;
  }
`;

const UserStatus = styled.div`
  margin-left: 60px;
`;

const Header = ({ name }) => {
  return (
    <HeaderStyle>
      <UserStatus>
        오늘&nbsp;<span>{name}</span>님은 회사근무 일입니다.
      </UserStatus>
      <AtHome />
    </HeaderStyle>
  );
};

export default Header;
