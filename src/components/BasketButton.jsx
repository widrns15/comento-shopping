import styled from "styled-components";

const BasketButton = ({ children }) => {
  return <StyledBasketButton>{children}</StyledBasketButton>;
};

const StyledBasketButton = styled.button`
  width: 100%;
  height: 70px;
  font-family: "Noto Sans KR";
  font-weight: bold;
  text-align: center;
  background-color: #24dbaf;
  border: none;
  cursor: pointer;
`;

export default BasketButton;
