import styled from "styled-components";

const Searchbar = () => {
  return (
    <SearchBar>
      <CustomInput
        type="search"
        placeholder="Search..."
        autoFocus
        autoCorrect
      />
      <CustomBtn>Search</CustomBtn>
    </SearchBar>
  );
};

export default Searchbar;

const SearchBar = styled.div`
  position: sticky;
  top: 60px;
  height: 60px;
  background-color: #4caf50;
  /* border: 2px solid black; */
  padding: 0px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1;

  /* @media screen and (min-width: 1024px) {
    padding: 0px 5%;
  } */
`;

const CustomInput = styled.input`
  height: 40px;
  flex-grow: 1;
  min-width: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 16px;
`;

const CustomBtn = styled.button`
  height: 40px;
  width: 70px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  &:hover {
    box-shadow: 1px 1px 5px 1px #bfbfbf;
  }
`;
