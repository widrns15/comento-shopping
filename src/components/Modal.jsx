import styled from "styled-components";

const Modal = ({ onCloseModal }) => {
  return (
    <>
      <ModalOverlay />
      <StyledModal>
        <h3>주문 완료 :P</h3>
        <button onClick={onCloseModal}>확인</button>
      </StyledModal>
    </>
  );
};

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 160px;
  z-index: 1000;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -35%);
  background: #ffffff;
  border: 1px solid #bfbfbf;
  border-radius: 8px;
  body {
    overflow: hidden;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 30px;
  }
  button {
    width: 120px;
    height: 40px;
    font-family: "Noto Sans KR";
    font-size: 16px;
    background: #cccccc;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const ModalOverlay = styled.div`
  width: 390px;
  height: 873px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, 0.22);
  z-index: 999;
`;

export default Modal;
