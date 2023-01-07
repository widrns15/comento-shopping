import Navigation from "../components/Navigation";
import ProductTab from "../components/ProductTab";
import InProduct from "../components/InProduct";
import styled from "styled-components";
import BasketButton from "../components/BasketButton";
import ProductDetailView from "../components/ProductDetailView";

const ProductDetail = () => {
  return (
    <MainSection>
      <div>
        <Icon />
        <Navigation />
        <div>
          <InProduct
            Name="비숑 블랙 머그잔"
            Description="21,800원"
            Thumnail="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg"
          />
        </div>
      </div>

      <div>
        <ProductTab />
        <ProductDetailView
          detailImg={
            "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1_detail.jpeg"
          }
          name={"비숑 블랙 머그잔"}
        />
        <BasketButton>장바구니 담기</BasketButton>
      </div>
    </MainSection>
  );
};

const Icon = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  left: 33px;
  top: 25px;

  border-left: 2px solid black;
  border-top: 2px solid black;

  transform: rotate(-45deg);
`;

const MainSection = styled.div`
  position: relative;
  width: 390px;
  height: 1554px;
  background: #ffffff;
`;

export default ProductDetail;
