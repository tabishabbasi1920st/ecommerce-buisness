import styled from "styled-components";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const UserProfile = () => {
  return (
    <MainContainer>
      <Header>
        <Navbar />
      </Header>
      UserProfile
    </MainContainer>
  );
};

export default UserProfile;

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`;
