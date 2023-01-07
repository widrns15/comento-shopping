import styled from "styled-components";

const ProductDetailView = ({ detailImg, name }) => {
  return (
    <ProductDetailViewTemplate>
      {/* TODO: 메뉴 버튼 선택에 따라 보여지는 화면 다르게 하기 */}
      <ProductDetailImg src={detailImg} name={name + " 상품 설명"} />
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
