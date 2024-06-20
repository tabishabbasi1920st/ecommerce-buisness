import styled from "styled-components";

const BrandItem = ({ brand }) => {
  return (
    <MainContainer>
      <CheckBox id={brand} type="checkbox" />
      <BrandLabel>{brand}</BrandLabel>
    </MainContainer>
  );
};

export default BrandItem;

const MainContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 1px 1px 5px 1px #bfbfbf;
  margin-bottom: 5px;
`;

const BrandLabel = styled.p`
  cursor: pointer;
`;

const CheckBox = styled.input`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
