import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../modal/Modal";
import ModalBackGround from "../../modal/ModalBackGround";

const AtHomeContainer = styled.div`
  width: 192.21px;
  height: 61px;
  background: #000000;
  border: 2px solid #000000;
  border-radius: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;

  margin-right: 60px;

  cursor: pointer;
`;

const AtHome = () => {
  const [isOpened, setIsOpened] = useState(false);

  const open = () => {
    setIsOpened(true);
  };

  return (
    <>
      <AtHomeContainer onClick={open}>재택 신청</AtHomeContainer>
      {/* 모달 */}
      <ModalBackGround isOpened={isOpened} setIsOpened={setIsOpened}>
        <Modal description="재택 신청 하시겠습니까" type="atHome" />
      </ModalBackGround>
    </>
  );
};

export default AtHome;
