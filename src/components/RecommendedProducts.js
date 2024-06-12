import styled from "styled-components";

const RecommendedProducts = () => {
  return (
    <MainContainer>
      <MainHeading>Recommended Products</MainHeading>
    </MainContainer>
  );
};

export default RecommendedProducts;

const MainContainer = styled.div`
  margin-top: 10px;
  padding: 10px;
  /* border: 2px solid red; */
`;

const MainHeading = styled.h1`
  font-size: 25px;
  color: #757575;
  font-weight: 500;
`;
