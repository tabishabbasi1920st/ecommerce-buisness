import styled from "styled-components";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <MainContainer>
      <Header>
        <Navbar />
      </Header>
      Home
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`;
