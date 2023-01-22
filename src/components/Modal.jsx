import styled from "styled-components";

const Modal = ({
  modalText,
  onClickOrder,
  onClickCancle,
  onModalClose,
  hasCancle,
}) => {
  return (
    <>
      <ModalOverlay />
      <StyledModal>
        {hasCancle ? (
          <>
            <h3> {modalText}</h3>
            <ButtonSection>
              <button onClick={onClickOrder}>결제</button>
              <button onClick={onClickCancle}>취소</button>
            </ButtonSection>
          </>
        ) : (
          <div>
            <h3>{modalText}</h3>
            <ButtonFooter>
              <button onClick={onModalClose}>확인</button>
            </ButtonFooter>
          </div>
        )}
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
    flex-direction: row;
    width: 60px;
    height: 40px;
    font-family: "Noto Sans KR";
    font-size: 16px;
    background: #cccccc;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 10px;
`;

const ButtonFooter = styled.div`
  margin-left: 18px;
`;

const ModalOverlay = styled.div`
  width: 390px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;

  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, 0.22);
  z-index: 999;
`;

export default Modal;
