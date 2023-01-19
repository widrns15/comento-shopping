import styled from "styled-components";
import Navigation from "../components/Navigation";
import BackButton from "../components/BackButton";
import Bar from "../components/Bar";
import * as storage from "../utils/storage";

const Basket = () => {
  console.log(storage.getBasketItems());
  return (
    <MainSection>
      <BackButton />
      <Navigation header={"장바구니"} />
      <Bar height={1} />
    </MainSection>
  );
};

const MainSection = styled.div`
  position: relative;
  width: 390px;
  height: 1554px;
  background: #ffffff;
  margin-left: auto;
  margin-right: auto;
`;
export default Basket;
