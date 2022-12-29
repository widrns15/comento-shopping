import Navigation from "../components/nevigation";
import ThemeButton from "../components/ThemeButton";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      <div>
        <Navigation />
        {/* ThemeButton */}
        <ThemeButton ThemeName={"#겨울 방한템"} />
        <ThemeButton ThemeName={"#따순 머그컵"} />
      </div>

      <div>
        {/* ProductCard */}
        <ProductCard
          Name="비송 블랙 머그잔"
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
      </div>
    </div>
  );
};

export default Home;
