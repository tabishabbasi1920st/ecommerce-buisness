import styled from "styled-components";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <MainContainer>
      <Navbar />
      Home
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`;
