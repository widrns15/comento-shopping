import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <NavigationStyled onClick={() => navigate("/")}>일이 쇼핑</NavigationStyled>
  );
};

const NavigationStyled = styled.div`
  width: fit-content;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  padding: 20px 151px;
  color: black;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

export default Navigation;
