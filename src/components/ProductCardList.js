import styled from "styled-components";

const ProductCardList = ({ product }) => {
  const {
    id,
    title,
    price,
    description,
    images,
    creationAt,
    updatedAt,
    category,
  } = product;

  return (
    <MainContainer>
      <Card>
        <ImageContainer>
          <Image src={images[0]} />
        </ImageContainer>
        <DetailsContainer>
          <p className="card-title">{title}</p>
          <p className="card-price">
            <span>&#8377;</span> {price}
          </p>
          <button className="add-to-cart-btn">Add to cart</button>
        </DetailsContainer>
      </Card>
    </MainContainer>
  );
};

export default ProductCardList;

const MainContainer = styled.li`
  height: 200px;
  margin-bottom: 10px;
  /* border: 2px solid red; */
  padding: 10px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 1024px) {
    width: 33.33%;
  }
`;

const Card = styled.div`
  display: flex;
  height: 100%;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 1px #bfbfbf;
  overflow: hidden;
  width: 100%;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 50%;
  max-width: 300px;
`;

const Image = styled.img`
  height: 100%;
`;

const DetailsContainer = styled.div`
  border: 1px solid #c8e6c9;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left: none;
  height: 100%;
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
  }
`;
