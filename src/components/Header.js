import styled from "styled-components";

const Header = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Header;

const MainContainer = styled.header`
  background-color: #4caf50;
  padding: 0px 10px;

  @media screen and (min-width: 1024px) {
    padding: 0px 5%;
  }
`;
