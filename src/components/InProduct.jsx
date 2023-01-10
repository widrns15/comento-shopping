import styled from "styled-components";

const InProduct = ({ Name, Description, Thumnail }) => {
  return (
    <div>
      <img width={390} src={Thumnail} alt={Name} />
      <Section>
        <NameStyled>{Name}</NameStyled>
        <DescriptionStyled>{Description.toLocaleString()}원</DescriptionStyled>
      </Section>
    </div>
  );
};

const Section = styled.div`
  padding-top: 20px;
  padding-bottom: 0px;
`;

const NameStyled = styled.div`
  width: fit-content;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  padding: 4px 24px;
  letter-spacing: -0.01em;
  color: black;
`;

const DescriptionStyled = styled.div`
  width: fit-content;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  padding: 4px 24px;
  letter-spacing: -0.01em;
  color: black;
`;

export default InProduct;
