import Nevigation from "../components/nevigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";

const Home = () => {
  return (
    <MainSection>
      <div>
        <Nevigation />
        <Topbar />
        <ThemeSection>
          <ThemeButton ThemeName={"#겨울 방한템"} />
          <ThemeButton ThemeName={"#따순 머그컵"} />
        </ThemeSection>
        <GrayLine />
      </div>

      <div>
        <MiddleBar />

        <ProductCard
          Name="비숑 블랙 머그잔"
          Description="쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 블랙 & 화이트 비숑 머그잔입니다."
          Thumnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg"
        />
        <ProductCard
          Name="가열 보온 티코스터 온열 원터치 컵 받침대"
          Description="언제나 따뜻하게 최대 12시간 동안 최대 60도의 온도로 따듯한 차를 즐길 수 있습니다."
          Thumnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg"
        />
        <ProductCard
          Name="벨루즈까사 솜사탕 파스텔 머그 4종 세트"
          Description="솜사탕처럼 부드러운 쉐입에 스트라이프 조각이 더해져 심플하면서도 세련된 파스텔 컬러의 머그"
          Thumnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg"
        />
        <BottomBar />
      </div>
    </MainSection>
  );
};

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

const MiddleBar = styled.div`
  height: 20px;
  width: 100%;
  color: white;
`;

const BottomBar = styled.div`
  height: 82px;
  width: 100%;
  color: white;
`;

export default Home;
