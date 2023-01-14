import styled from "styled-components";

const ProductDetailView = ({ detailImg, name, tab }) => {
  return (
    <ProductDetailViewTemplate>
      {tab === 0 ? (
        <ProductDetailImg src={detailImg} name={name + " 상품 설명"} />
      ) : (
        <div>상품 후기입니당.</div>
      )}
    </ProductDetailViewTemplate>
  );
};

const ProductDetailViewTemplate = styled.div`
  width: 100%;
  height: 825px;
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
