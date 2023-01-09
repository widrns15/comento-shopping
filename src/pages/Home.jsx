import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { mockTheme1Produdcts, mockTheme2Produdcts } from "../data/mockData";
import { useState } from "react";

const Home = () => {
  const [products, setProducts] = useState();

  // 테마 버튼 클릭 Event
  const onClickThemeButton = (themeId) => {
    if (themeId === 1) {
      setProducts(mockTheme1Produdcts);
    } else if (themeId === 2) {
      setProducts(mockTheme2Produdcts);
    }
  };
  return (
    <MainSection>
      <div>
        <div>
          <Navigation />
          <Topbar />
        </div>
        <ThemeSection>
          <ThemeButton
            ThemeName={"#따순 머그컵"}
            onClick={() => onClickThemeButton(1)}
          />
          <ThemeButton
            ThemeName={"#겨울 필수템"}
            onClick={() => onClickThemeButton(2)}
          />
        </ThemeSection>
        <GrayLine />
      </div>

      <ProductCards>
        {/* mockData list를 화면에 노출하자 - map 문법 */}
        {/* 삼향연산자 */}
        {products ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              Name={product.name}
              Description={product.description}
              Thumnail={product.thumbnail}
            />
          ))
        ) : (
          <div>---------------------- 테마 선택 ----------------------</div>
        )}
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
