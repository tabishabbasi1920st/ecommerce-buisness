import styled from "styled-components";

const Banner = () => {
  return <MainContainer>Banner</MainContainer>;
};

export default Banner;

const MainContainer = styled.div`
  border: 2px solid orange;

  @media screen and (max-width: 425px) {
    min-height: 150px;
    max-height: 300px;
  }

  @media screen and (min-width: 426px) {
    min-height: 175px;
    max-height: 310px;
  }
`;
