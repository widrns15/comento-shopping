import Navigation from "../components/Navigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { mockTheme1Produdcts, mockTheme2Produdcts } from "../data/mockData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // state(상태) - 변화가 있을 때 모션동작
  // 다시 렌더링(UI를 불러오는) 되는 조건 값
  const [products, setProducts] = useState(0);
  const navigate = useNavigate();

  // 조건에 의해서 실행되는 함수
  useEffect(() => {
    setTimeout(() => {
      setProducts(mockTheme1Produdcts);
    }, 1000);
  }, []);

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
          <Navigation header={"일이 쇼핑"} />
          <Topbar />
        </div>
        <ThemeSection>
          <ThemeButton
            ThemeName={"#따순 머그컵"}
            onClick={() => onClickThemeButton(1)}
          />
          <ThemeButton
            ThemeName={"#여름 필수템"}
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
              Thumbnail={product.thumbnail}
              OnClick={() => navigate(`product/${product.id}`)}
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
  margin-left: auto;
  margin-right: auto;
`;
const ThemeSection = styled.div`
  display: flex;
  gap: 12px;
  padding: 40px 24px;
  padding-left: 50px;
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
