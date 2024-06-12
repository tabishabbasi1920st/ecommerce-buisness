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
      <Banner />
      <Main>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
        <li>Home main</li>
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
  flex-grow: 1;

  @media screen and (min-width: 1700px) {
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Footer = styled.footer`
  border: 2px solid blue;

  @media screen and (min-width: 1700px) {
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`;
