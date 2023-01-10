import styled from "styled-components";

const ProductCard = ({ Name, Description, Thumbnail }) => {
  return (
    <ProductCardStyled>
      <ProductThumbnail style={{ backgroundImage: `url(${Thumbnail})` }} />
      <ProductName>{Name}</ProductName>
      <ProductDesc>{Description}</ProductDesc>
    </ProductCardStyled>
  );
};
const ProductCardStyled = styled.div`
  padding: 20px 24px;
  white-space: pre-line;
`;
const ProductThumbnail = styled.div`
  width: 100%;
  height: 204px;
  background-size: cover;
  background-position: center;
`;

const ProductName = styled.div`
  width: fit-content;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  padding: 12px 0px;
  color: black;
`;

const ProductDesc = styled.div`
  width: fit-content;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: black;
`;

export default ProductCard;
