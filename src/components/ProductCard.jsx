import styled from "styled-components";

const ProductCard = ({ Name, Description, Thumnail }) => {
  return (
    <ProductCardStyled>
      <img width={341} src={Thumnail} alt={Name} />
      <NameStyled>{Name}</NameStyled>
      <DescriptionStyled>{Description}</DescriptionStyled>
    </ProductCardStyled>
  );
};
const ProductCardStyled = styled.div`
  padding: 20px 24px;
  white-space: pre-line;
`;

const NameStyled = styled.div`
  width: fit-content;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  padding: 12px 0px;
  color: black;
`;

const DescriptionStyled = styled.div`
  width: fit-content;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: black;
`;

export default ProductCard;
