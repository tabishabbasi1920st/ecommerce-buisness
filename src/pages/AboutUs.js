import styled from "styled-components";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <MainContainer>
      <Header>
        <Navbar />
      </Header>
      AboutUs
    </MainContainer>
  );
};

export default AboutUs;

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`;
