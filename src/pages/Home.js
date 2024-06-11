import styled from "styled-components";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <MainContainer>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Banner />
        Home main
      </Main>
      <Footer></Footer>
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  /* border: 2px solid red; */
  flex-grow: 1;
`;

const Footer = styled.footer`
  border: 2px solid blue;
`;
