import styled from "styled-components";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Search = () => {
  return (
    <MainContainer>
      <Header>
        <Navbar />
      </Header>
      Search
    </MainContainer>
  );
};

export default Search;

const MainContainer = styled.div``;
