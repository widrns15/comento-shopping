import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return <BackButtonStyled onClick={() => navigate(-1)}></BackButtonStyled>;
};

const BackButtonStyled = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  left: 33px;
  top: 25px;
  border-left: 2px solid black;
  border-top: 2px solid black;
  cursor: pointer;
  transform: rotate(-45deg);
`;

export default BackButton;
