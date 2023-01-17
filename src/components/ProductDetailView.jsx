import styled from "styled-components";
import Review from "./Review";

const ProductDetailView = ({ detailImg, name, tab }) => {
  return (
    <ProductDetailViewTemplate tab={tab}>
      {tab === 0 ? (
        <ProductDetailImg src={detailImg} alt={`${name} 상품 설명`} />
      ) : (
        <Review />
      )}
    </ProductDetailViewTemplate>
  );
};

const ProductDetailViewTemplate = styled.div`
  width: 100%;
  height: ${(props) => (props.tab === 0 ? "825px" : "380px")};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProductDetailImg = styled.img`
  width: 342px;
  margin: 0 24px;
  object-fit: cover;
`;

export default ProductDetailView;
