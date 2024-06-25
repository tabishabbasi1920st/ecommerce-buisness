import { useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";

const categoriesList = [
  { id: "BAKERY", name: "Bakery" },
  { id: "FRUITS", name: "Fruits" },
  { id: "FURNITURE", name: "Furniture" },
  { id: "COSMETICS", name: "Cosmetics" },
  { id: "MEDICINE", name: "Medicine" },
  { id: "UTENSILS", name: "Utensils" },
  { id: "HOUSE_HOLD", name: "Household" },
  { id: "ELECTRONICS", name: "Electronics" },
  { id: "CLOTHING", name: "Clothing" },
  { id: "SPORTS", name: "Sports" },
  { id: "BOOKS", name: "Books" },
  { id: "TOYS", name: "Toys" },
  { id: "AUTOMOTIVE", name: "Automotive" },
  { id: "JEWELRY", name: "Jewelry" },
  { id: "GARDEN", name: "Garden " },
  { id: "PETS", name: "Pet " },
  { id: "ART", name: "Art" },
  { id: "HEALTH", name: "Health" },
  { id: "TRAVEL", name: "Travel " },
  { id: "VIDEO_GAMES", name: " Games" },
];

const Categories = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(undefined);
  const categoryContainerRef = useRef();

  const scrollLeft = () => {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <MainContainer>
      <ScrollButton onClick={scrollLeft}>
        <MdKeyboardArrowLeft />
      </ScrollButton>
      <CategoriesContainer ref={categoryContainerRef}>
        {categoriesList.map((category) => (
          <CategoryItem
            isSelected={selectedCategoryId === category.id}
            onClick={() => setSelectedCategoryId(category.id)}
          >
            {category.name}
          </CategoryItem>
        ))}
      </CategoriesContainer>
      <ScrollButton onClick={scrollRight}>
        <MdKeyboardArrowRight />
      </ScrollButton>
    </MainContainer>
  );
};

export default Categories;

const MainContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: sticky;
  top: 60px;
  z-index: 10;
  background-color: white;
`;

const CategoriesContainer = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  overflow: auto;
  padding: 10px 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  height: 40px;
  width: auto;
  background-color: ${({ isSelected }) => (isSelected ? "#4CAF50" : "#c8e6c9")};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#7f7f7f")};
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  box-shadow: 1px 1px 5px 1px #bfbfbf;
`;

const ScrollButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
