import styled from "styled-components";

const ProductTab = ({ firstTab, secondTab, tab, onClick }) => {
  return (
    <DetailMenuButtonTemplate>
      <MenuButton click={tab === 0} onClick={() => onClick(0)}>
        {firstTab}
      </MenuButton>
      <MenuButton click={tab === 1} onClick={() => onClick(1)}>
        {secondTab}
      </MenuButton>
    </DetailMenuButtonTemplate>
  );
};

const DetailMenuButtonTemplate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  text-align: center;
`;

const MenuButton = styled.button`
  flex: 1;
  height: 48px;

  /* FIXME: 위치 기준이 아닌 버튼의 선택 유무에 따라 스타일 적용 */
  background-color: ${(props) => (props.click ? "#eeeeee" : "#ffffff")};

  font-weight: ${(props) => (props.click ? "bold" : "normal")};
  font-size: 16px;
  font-family: "Noto Sans KR";

  border: 1px solid #eeeeee;

  margin: 25px 0;

  cursor: pointer;
`;

export default ProductTab;
