import styled from "styled-components";
import { GoHeartFill } from "react-icons/go";

const ProductCard = ({ product }) => {
  const { title, price, images } = product;

  const renderCard = () => {
    return (
      <Card>
        <ImgContainer>
          <WishListBtn>
            <GoHeartFill />
          </WishListBtn>
          <Image src={images[0]} />
        </ImgContainer>
        <DetailsContainer>
          <p className="card-title">{title}</p>
          <p className="card-price">
            <span>&#8377;</span> {price}
          </p>
          <button className="add-to-cart-btn">Add to cart</button>
        </DetailsContainer>
      </Card>
    );
  };

  return <MainContainer>{renderCard()}</MainContainer>;
};

export default ProductCard;

const MainContainer = styled.li`
  min-width: 300px;
  height: 350px;
  /* border: 2px solid red; */
  padding: 15px;
  transition: all 0.2s ease-in-out;

  &:hover {
    padding: 5px;
  }
`;

const Card = styled.div`
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 1px 1px 5px 1px #bfbfbf;
`;

const ImgContainer = styled.div`
  position: relative;
  height: 60%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const DetailsContainer = styled.div`
  border: 1px solid #c8e6c9;
  border-top: none;
  height: 40%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  .card-title {
    max-height: 60px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    line-height: 20px;
    margin-bottom: 5px;
    font-size: 16px;
  }

  .card-price span {
    font-size: 20px;
    margin-top: 2px;
    margin-right: 3px;
  }

  .card-price {
    display: flex;
    font-size: 25px;
    font-weight: 600;
  }

  .add-to-cart-btn {
    height: 40px;
    width: 100%;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    background-color: #4caf50;
    color: #fff;
    margin-top: auto;
    cursor: pointer;

    &:hover {
      box-shadow: 2px 2px 15px 5px #bfbfbf;
    }
  }
`;

const WishListBtn = styled.button`
  position: absolute;
  height: 40px;
  width: 40px;
  font-size: 28px;
  background-color: transparent;
  border: none;
  right: 10px;
  top: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 1px #bfbfbf;
  cursor: pointer;
`;
