import Navigation from "../components/Navigation";
import ProductTab from "../components/ProductTab";
import InProduct from "../components/InProduct";
import BackButton from "../components/BackButton";
import styled from "styled-components";
import BasketButton from "../components/BasketButton";
import ProductDetailView from "../components/ProductDetailView";
import { useParams } from "react-router-dom";
import { getProductDetail, mockReviews } from "../data/mockData";
import { useEffect, useState } from "react";
import Review from "../components/Review";

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
          {tab === 0 && (
            <ProductDetailView
              detailImg={product.mainImage}
              name={product.name}
              tab={tab}
            />
          )}

          {tab === 1 && (
            <div>
              {mockReviews.map((product) => (
                <Review
                  key={product.id}
                  username={product.username}
                  profileImage={product.profileImage}
                  score={product.score}
                  createdDate={product.createdDate}
                  reviewText={product.reviewText}
                  tab={tab}
                />
              ))}
            </div>
          )}

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
