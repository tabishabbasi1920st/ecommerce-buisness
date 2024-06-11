import styled from "styled-components";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Cart = () => {
  return (
    <MainContainer>
      <Header>
        <Navbar />
      </Header>
      Cart
    </MainContainer>
  );
};

export default Cart;

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`;
