import { useEffect, useState } from "react";
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

const plateformConstants = {
  mobile: "MOBILE",
  other: "OTHER",
};

const Categories = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(undefined);
  const [plateform, setPlateform] = useState(plateformConstants.mobile);

  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      setPlateform(plateformConstants.mobile);
    } else {
      setPlateform(plateformConstants.other);
    }
  }, []);

  return (
    <CategoriesContainer plateform={plateform}>
      {categoriesList.map((category) => (
        <CategoryItem
          isSelected={selectedCategoryId === category.id}
          onClick={() => setSelectedCategoryId(category.id)}
        >
          {category.name}
        </CategoryItem>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;

const CategoriesContainer = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  overflow: auto;
  padding: 10px 10px;
  margin-top: 10px;

  &::-webkit-scrollbar {
    display: ${({ plateform }) =>
      plateform === plateformConstants.mobile ? "none" : "block"};
    height: 10px;
  }

  &&::-webkit-scrollbar-thumb {
    background: #4caf50;
    border-radius: 2px;
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
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
  cursor: pointer;
  font-size: 17px;
`;
