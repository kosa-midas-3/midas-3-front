import React from "react";
import styled from "styled-components";

const ModalStyle = styled.div`
  width: 450px;
  height: 300px;

  background-color: white;
  border-radius: 15px;

  padding: 30px;
  padding-top: 80px;

  font-size: 40px;

  .buttonContainer {
    margin-top: 100px;
    text-align: right;
  }

  button {
    width: 120px;
    height: 40px;

    color: white;
    font-weight: 700;
  }

  .green {
    background-color: rgba(108, 220, 132, 1);
    border: none;
    outline: none;
    border-radius: 15px;
    margin-right: 15px;
  }
  .red {
    background-color: #ff2c18;
    border: none;
    outline: none;
    border-radius: 15px;
  }
`;

/**
 * description: 모달안에 들어갈 메세지
 * type: 이를 통해 서버와 통신할 때 사용한다
 */
const Modal = ({ description }) => {
  const sendMessege = (e) => {
    e.stopPropagation();
  };
  return (
    <ModalStyle onClick={sendMessege}>
      <div>{description}</div>
      <div className="buttonContainer">
        <button className="green">예</button>
        <button className="red">아니요</button>
      </div>
    </ModalStyle>
  );
};

export default Modal;
