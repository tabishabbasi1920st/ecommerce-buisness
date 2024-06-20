import styled from "styled-components";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const WishList = () => {
  return (
    <MainContainer>
      <Header>
        <Navbar />
      </Header>
      WishList
    </MainContainer>
  );
};

export default WishList;

const MainContainer = styled.div``;
