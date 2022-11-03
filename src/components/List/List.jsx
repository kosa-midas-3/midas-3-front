import React from "react";
import styled from "styled-components";
import Item from "./Item";

const ListStyle = styled.div`
  display: flex;
  gap: 30px;
  width: 792px;
  flex-grow: 0;
  overflow-x: scroll;

  margin: 0 auto;
  /* margin-top: 30px; */

  ::-webkit-scrollbar {
    display: none;
  }
`;

const List = ({ department }) => {
  return (
    <ListStyle>
      {department?.members.map((v) => (
        <Item v={v} department={department.department} />
      ))}
    </ListStyle>
  );
};

export default List;
