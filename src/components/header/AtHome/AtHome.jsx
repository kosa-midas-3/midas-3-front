import React, { useState } from "react";
import styled from "styled-components";
import { ConfirmModal, useModal } from "@kimuichan/ui-base";
import { useMutation } from "react-query";
import { homeApply } from "../../../api/Auth/Auth.api";

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

const AtHome = ({ infoRefetch, homeApplyStatus }) => {
  const { modalRef, open, setIsOpen } = useModal("home");

  const { mutate } = useMutation(homeApply, {
    onSuccess: () => {
      infoRefetch();
    },
  });

  const obj = {
    HOME_APPLY: "승인 대기 중",
    NOTHING: "재택 신청",
    REFUSED: "거절됨",
    ACCEPTED: "수락됨",
  };

  return (
    <>
      <AtHomeContainer onClick={() => setIsOpen(true)}>
        {obj[homeApplyStatus]}
      </AtHomeContainer>
      {homeApplyStatus === "NOTHING" && open && (
        <ConfirmModal
          modalRef={modalRef}
          setIsOpen={setIsOpen}
          text={{
            accept: "예",
            refuse: "아니오",
            title: "재택을\n신청하시겠습니까?",
          }}
          onFinally={(result) => {
            result && mutate();
          }}
        ></ConfirmModal>
      )}
    </>
  );
};

export default AtHome;
