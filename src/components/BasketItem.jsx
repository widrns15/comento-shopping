import styled from "styled-components";
import Bar from "./Bar";

const BasketItem = ({ thumbnail, name, price, onClickRemoveButton }) => {
  return (
    <>
      <BasketItemStyled>
        <RowLayout>
          <RowLayout>
            <ProductImage style={{ backgroundImage: `url(${thumbnail})` }} />
            <ColumnLayout>
              <ProductName>{name}</ProductName>
              <div>{price.toLocaleString()}원</div>
            </ColumnLayout>
          </RowLayout>
          <CloseButton onClick={onClickRemoveButton}>X</CloseButton>
        </RowLayout>
      </BasketItemStyled>
      <Bar height={1} />
    </>
  );
};

export default BasketItem;

const BasketItemStyled = styled.div`
  width: 100%;
  padding: 16px;
  margin: 10px 0px;
`;
const RowLayout = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
const ColumnLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: pre-line;
`;

const ProductImage = styled.div`
  width: 120px;
  height: 100px;
  background-size: cover;
  background-position: center;
`;
const CloseButton = styled.div`
  cursor: pointer;
  margin-right: 50px;
`;

const ProductName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #000000;
`;
