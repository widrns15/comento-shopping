import Navigation from "../components/Navigation";
import ProductTab from "../components/ProductTab";
import InProduct from "../components/InProduct";
import styled from "styled-components";
import BasketButton from "../components/BasketButton";
import ProductDetailView from "../components/ProductDetailView";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../data/mockData";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  // URL에서 paramter 변수(productId) 받아오는 로직
  let { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, [productId]);

  return (
    <MainSection>
      <Icon />
      <Navigation />
      {product && (
        <div>
          <InProduct
            Name={product.name}
            Description={product.price}
            Thumnail={product.thumbnail}
          />

          <ProductTab />
          <ProductDetailView
            detailImg={product.mainImage}
            name={product.name}
          />
          <BasketButton>장바구니 담기</BasketButton>
        </div>
      )}
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
  margin-left: auto;
  margin-right: auto;
`;

export default ProductDetail;
