import styled from "styled-components";

const PriceDetailView = ({ count, price, deliveryFee, totalPrice }) => {
  return (
    <ColumnLayout>
      <div>
        <span>상품 금액 ({count})개</span>
        <span>{price.toLocaleString()}원</span>
      </div>
      <div>
        <span>배송비</span>
        <span>{deliveryFee.toLocaleString()}원</span>
      </div>
      <div>
        <span>총 주문금액</span>
        <span>{totalPrice.toLocaleString()}원</span>
      </div>
    </ColumnLayout>
  );
};

const ColumnLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  margin-top: 100px;
  div {
    display: flex;
    justify-content: space-between;
  }
  div:nth-child(3) {
    color: #ff5c5c;
    font-weight: bold;
  }
  span:nth-child(1) {
    color: #616161;
  }
`;

export default PriceDetailView;
