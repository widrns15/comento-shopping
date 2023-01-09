import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { mockTheme1Produdcts } from "../data/mockData";

const Home = () => {
  return (
    <MainSection>
      <div>
        <div>
          <Navigation />
          <Topbar />
        </div>
        <ThemeSection>
          <ThemeButton ThemeName={"#따순 머그컵"} />
          <ThemeButton ThemeName={"#겨울 필수템"} />
        </ThemeSection>
        <GrayLine />
      </div>

      <ProductCards>
        {/* mockData list를 화면에 노출하자 - map 문법 */}
        {mockTheme1Produdcts.map((product) => (
          <ProductCard
            // props와 map 함수 원소 구분을 위해 대소문자 사용했음
            key={product.id}
            Name={product.name}
            Description={product.description}
            Thumnail={product.thumbnail}
          />
        ))}
      </ProductCards>
    </MainSection>
  );
};

const ProductCards = styled.div`
  padding-top: 20px;
  padding-bottom: 82px;
`;

const MainSection = styled.div`
  position: relative;
  width: 390px;
  height: 1322px;
  background: #ffffff;
`;
const ThemeSection = styled.div`
  display: flex;
  gap: 12px;
  padding: 40px 24px;
`;

const Topbar = styled.div`
  height: 1px;
  width: 100%;
  background: #eeeeee;
`;
const GrayLine = styled.div`
  height: 8px;
  width: 100%;
  background: #eeeeee;
`;

export default Home;
