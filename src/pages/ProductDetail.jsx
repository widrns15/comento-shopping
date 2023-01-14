import Navigation from "../components/Navigation";
import ProductTab from "../components/ProductTab";
import InProduct from "../components/InProduct";
import BackButton from "../components/BackButton";
import styled from "styled-components";
import BasketButton from "../components/BasketButton";
import ProductDetailView from "../components/ProductDetailView";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../data/mockData";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState();
  const [tab, setTab] = useState(0);

  const handleClickTabs = (tab) => {
    if (tab === 0) {
      setTab(0);
    } else {
      setTab(1);
    }
  };

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, [productId]);

  return (
    <MainSection>
      <BackButton />
      <Navigation />
      {product && (
        <div>
          <InProduct
            Name={product.name}
            Description={product.price}
            Thumnail={product.thumbnail}
          />

          <ProductTab
            firstTab={"상품 설명"}
            secondTab={"상품 후기"}
            tab={tab}
            onClick={handleClickTabs}
          />

          <ProductDetailView
            detailImg={product.mainImage}
            name={product.name}
            tab={tab}
          />
          <BasketButton>장바구니 담기</BasketButton>
        </div>
      )}
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

export default ProductDetail;
