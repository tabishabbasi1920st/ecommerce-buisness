import styled from "styled-components";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();
  const navigate = useNavigate();

  const handleImageInput = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    setImage(null);
    handleImageInput();
  };

  const renderDpSection = () => {
    return (
      <DpSection>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          ref={imageInputRef}
          onChange={handleFileChange}
        />
        {image === null ? (
          <DpBtn onClick={handleImageInput}>
            <span style={{ fontSize: "50px", color: "#4caf50" }}>+</span>
          </DpBtn>
        ) : (
          <Wrapper>
            <DpContainer bgImage={image} />
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <EditBtn onClick={handleEditClick}>Edit</EditBtn>
              <SaveChangeBtn>Save Changes</SaveChangeBtn>
            </div>
          </Wrapper>
        )}
      </DpSection>
    );
  };

  const renderWishListBtn = () => {
    return (
      <CustomBtn onClick={() => navigate("/wishList")}>WishList</CustomBtn>
    );
  };

  const renderOrdersBtn = () => {
    return (
      <CustomBtn onClick={() => navigate("/your-orders")}>
        Your Orders
      </CustomBtn>
    );
  };

  return (
    <MainContainer>
      <Header>
        <Navbar />
      </Header>
      <Main>
        {renderDpSection()}
        <BtnWrapper>
          {renderWishListBtn()}
          {renderOrdersBtn()}
        </BtnWrapper>
      </Main>
      <Footer></Footer>
    </MainContainer>
  );
};

export default UserProfile;

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 10px;
`;

const Footer = styled.footer`
  border: 2px solid blue;

  @media screen and (min-width: 1700px) {
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const DpSection = styled.section`
  display: flex;
  justify-content: center;
  border-radius: 10px;
`;

const DpBtn = styled.button`
  border-radius: 50%;
  height: 250px;
  width: 250px;
  background-color: #c8e6c9;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    height: 260px;
    width: 260px;
  }
`;

const DpContainer = styled.div`
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  height: 250px;
  width: 250px;
  background-color: #c8e6c9;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-radius: 10px;
    height: 70vh;
    width: 70vw;

    @media screen and (max-width: 426px) {
      height: 50vh;
      width: 99vw;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const EditBtn = styled.button`
  background-origin: #f0f0f0;
  border: none;
  border-radius: 20px;
  height: 40px;
  width: 150px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ff0000;
    color: #fff;
  }
`;

const SaveChangeBtn = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #c8e6c9;
  color: black;
  height: 40px;
  width: 150px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #4caf50;
    color: #fff;
  }
`;

const BtnWrapper = styled.div`
  margin-top: 20px;
  border-top: 1px solid #f5f5f5;
  display: flex;
  gap: 10px;
  padding: 10px 0px;
`;

const CustomBtn = styled.button`
  border: none;
  font-size: 16px;
  border-radius: 5px;
  height: 120px;
  cursor: pointer;
  width: 50%;
  background-color: #c8e6c9;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #4caf50;
    color: #fff;
    font-size: 20px;
  }

  @media screen and (min-width: 576px) {
    width: 33.33%;
  }

  @media screen and (min-width: 768px) {
    width: 25%;
  }

  @media screen and (min-width: 769px) {
    width: 20%;
  }

  @media screen and (min-width: 992px) {
    width: 16.5%;
  }
`;
