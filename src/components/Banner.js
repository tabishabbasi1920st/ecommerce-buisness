import styled from "styled-components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Banner = () => {
  const [bannerImages, setBannerImages] = useState([
    {
      id: uuidv4(),
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/MAYGTM2022/2024/PC_Hero_3000x1200_Electricityjpg._CB555882039_.jpg",
      redirectLink: "",
      serialNumber: 1,
    },
    {
      id: uuidv4(),
      imageUrl:
        "https://res.cloudinary.com/dctfbwk0m/image/upload/v1718170086/4._CB555363428__xsajqp.jpg",
      redirectLink: "",
      serialNumber: 2,
    },
    {
      id: uuidv4(),
      imageUrl:
        "https://res.cloudinary.com/dctfbwk0m/image/upload/v1718170216/EID_2024_June_GW_Hero_-_PC_2._CB555365466__dcsot7.jpg",
      redirectLink: "",
      serialNumber: 3,
    },
    {
      id: uuidv4(),
      imageUrl:
        "https://res.cloudinary.com/dctfbwk0m/image/upload/v1718170286/MED_Hero_PC3000-x-1200_Multi_bank._CB555355873__ys7xl5.jpg",
      redirectLink: "",
      serialNumber: 4,
    },
    {
      id: uuidv4(),
      imageUrl:
        "https://res.cloudinary.com/dctfbwk0m/image/upload/v1718170350/Homepage_DesktopHeroTemplate_3000x1200Bumtum._CB584009191__cbv3pb.jpg",
      redirectLink: "",
      serialNumber: 5,
    },
  ]);

  const handleLeftArrowClick = () => {
    setBannerImages((prevList) => [
      prevList[prevList.length - 1],
      ...prevList.slice(0, -1),
    ]);
  };

  const handleRightArrowClick = () => {
    setBannerImages((prevList) => [...prevList.slice(1), prevList[0]]);
  };

  return (
    <MainContainer>
      <ArrowBtnsContainer>
        <ArrowBtns onClick={handleLeftArrowClick}>
          <MdOutlineArrowBackIosNew />
        </ArrowBtns>
        <ArrowBtns onClick={handleRightArrowClick}>
          <MdOutlineArrowForwardIos />
        </ArrowBtns>
      </ArrowBtnsContainer>
      <Image src={bannerImages[0].imageUrl} />
    </MainContainer>
  );
};

export default Banner;

const MainContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const ArrowBtnsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  width: 99.9vw;
  height: 50%;
`;

const ArrowBtns = styled.button`
  min-height: 100%;
  max-height: 100%;
  width: 40px;
  border: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
`;
