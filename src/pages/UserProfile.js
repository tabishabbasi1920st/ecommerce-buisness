import styled from "styled-components";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useRef, useState } from "react";

const UserProfile = () => {
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();

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

  return (
    <MainContainer>
      <Header>
        <Navbar />
      </Header>
      <Main>{renderDpSection()}</Main>
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
`;

const DpBtn = styled.button`
  border-radius: 50%;
  height: 250px;
  width: 250px;
  margin-top: 20px;
  background-color: #c8e6c9;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;

const DpContainer = styled.div`
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  height: 250px;
  width: 250px;
  margin-top: 20px;
  background-color: #c8e6c9;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const EditBtn = styled.button`
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 150px;
  font-size: 16px;
  cursor: pointer;
`;

const SaveChangeBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #c8e6c9;
  color: black;
  height: 40px;
  width: 150px;
  font-size: 16px;
  cursopointerr
`;
