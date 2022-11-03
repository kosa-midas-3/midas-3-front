import React from "react";
import styled from "styled-components";
import Item from "./Item";

const ListStyle = styled.div`
  display: flex;
  gap: 30px;
  width: 792px;
  flex-grow: 0;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const List = () => {
  return (
    <ListStyle>
      <Item />
      <Item />
      <Item />
      <Item />
    </ListStyle>
  );
};

export default List;
