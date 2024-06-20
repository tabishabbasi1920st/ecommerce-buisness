import styled from "styled-components";
import BrandItem from "./BrandItem";

const categoriesList = [
  { id: "ALL", name: "Choose Category" },
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

const brandsList = {
  ALL: ["Brand1", "Brand2", "Brand3"],
  BAKERY: ["Wonder Bread", "Baker's Delight", "Artisan Bakes"],
  FRUITS: ["Dole", "Chiquita", "Del Monte"],
  FURNITURE: ["IKEA", "Ashley Furniture", "Wayfair"],
  COSMETICS: ["L'Oreal", "Sephora", "MAC"],
  MEDICINE: ["Pfizer", "Johnson & Johnson", "Roche"],
  UTENSILS: ["Cuisinart", "OXO", "KitchenAid"],
  HOUSE_HOLD: ["Procter & Gamble", "Unilever", "Reckitt Benckiser"],
  ELECTRONICS: ["Apple", "Samsung", "Sony"],
  CLOTHING: ["Nike", "Adidas", "Zara"],
  SPORTS: ["Under Armour", "Reebok", "Puma"],
  BOOKS: ["Penguin Random House", "HarperCollins", "Simon & Schuster"],
  TOYS: ["Lego", "Mattel", "Hasbro"],
  AUTOMOTIVE: ["Toyota", "Ford", "Honda"],
  JEWELRY: ["Tiffany & Co.", "Cartier", "Pandora"],
  GARDEN: ["Scotts", "Miracle-Gro", "Fiskars"],
  PETS: ["Purina", "Pedigree", "Hill's Science Diet"],
  ART: ["Winsor & Newton", "Liquitex", "Faber-Castell"],
  HEALTH: ["GNC", "Nature's Bounty", "Vitafusion"],
  TRAVEL: ["Samsonite", "American Tourister", "Tumi"],
  VIDEO_GAMES: ["Nintendo", "Sony PlayStation", "Xbox"],
};

const FilterSidebar = ({ showInSm, showInLg }) => {
  const renderPriceFilter = () => {
    return (
      <Wrapper>
        <Heading>Price</Heading>
        <OptionTxt>From</OptionTxt>
        <CustomInput type="number" placeholder="10" />
        <OptionTxt>To</OptionTxt>
        <CustomInput type="number" placeholder="1000000000" />
      </Wrapper>
    );
  };

  const renderCategoryFilter = () => {
    return (
      <Wrapper>
        <Heading>Category</Heading>
        <Select>
          {categoriesList.map((category) => (
            <Option value={category.name} key={category.id}>
              {category.name}
            </Option>
          ))}
        </Select>
      </Wrapper>
    );
  };

  const renderBrandFilter = () => {
    return (
      <Wrapper>
        <Heading>Brand</Heading>
        {brandsList.BOOKS.map((brand, index) => (
          <BrandItem brand={brand} key={index} />
        ))}
      </Wrapper>
    );
  };

  const renderRatingFilter = () => {
    return (
      <Wrapper>
        <Heading>Rating</Heading>
        <Select>
          <Option value="1 or above">&#9733; and above</Option>
          <Option value="2 or above">&#9733; &#9733; and above</Option>
          <Option value="3 or above">&#9733; &#9733; &#9733; and above</Option>
          <Option value="4 or above">
            &#9733; &#9733; &#9733; &#9733; and above
          </Option>
          <Option value="5 or above">
            &#9733; &#9733; &#9733; &#9733; &#9733; and above
          </Option>
        </Select>
      </Wrapper>
    );
  };

  return (
    <MainContainer showInSm={showInSm} showInLg={showInLg}>
      {renderPriceFilter()}
      {renderCategoryFilter()}
      {renderBrandFilter()}
      {renderRatingFilter()}
    </MainContainer>
  );
};

export default FilterSidebar;

const MainContainer = styled.div`
  min-width: 250px;
  padding: 5px;
  box-shadow: 1px 1px 5px 1px #bfbfbf;
  display: none;

  display: ${({ showInSm }) => {
    if (showInSm) return "block";
    else {
      return "none";
    }
  }};

  margin: ${({ showInSm }) => {
    if (showInSm) return "10px";
    else {
      return "none";
    }
  }};

  border-radius: ${({ showInSm }) => {
    if (showInSm) return "10px";
    else {
      return "none";
    }
  }};

  @media screen and (min-width: 1024px) {
    display: ${({ showInLg }) => {
      if (showInLg === true) return "block";
      else return "none";
    }};
  }
`;

const Wrapper = styled.div`
  padding: 10px;
  /* box-shadow: 1px 1px 5px 1px #bfbfbf; */
  border-radius: 5px;
`;

const Heading = styled.h3`
  color: #3c3c3c;
  margin-bottom: 10px;
`;

const OptionTxt = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #707070;
`;

const CustomInput = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 1px 5px 1px #bfbfbf;
  margin: 5px 0px;
  outline: none;
  font-size: 16px;
  padding: 10px;
`;

const Select = styled.select`
  box-shadow: 1px 1px 5px 1px #bfbfbf;
  height: 40px;
  width: 100%;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: #fff;
`;

const Option = styled.option`
  font-size: 16px;
  font-weight: 500;
`;
