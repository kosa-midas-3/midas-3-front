import React from "react";
import styled from "styled-components";

const ModalBack = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBackGround = ({ isOpened, setIsOpened, children }) => {
  return (
    <>
      {isOpened && (
        <ModalBack onClick={() => setIsOpened(false)}>{children}</ModalBack>
      )}
    </>
  );
};

export default ModalBackGround;
