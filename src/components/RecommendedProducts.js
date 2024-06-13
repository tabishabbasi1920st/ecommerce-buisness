import styled from "styled-components";
import ProductCard from "./ProductCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRef } from "react";

const recommendedProductList = [
  {
    id: 29,
    title: "Mid-Century Modern Wooden Dining Table",
    price: 24,
    description:
      "Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.",
    images: [
      "https://i.imgur.com/DMQHGA0.jpeg",
      "https://i.imgur.com/qrs9QBg.jpeg",
      "https://i.imgur.com/XVp8T1I.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 30,
    title: "Elegant Golden-Base Stone Top Dining Table",
    price: 66,
    description:
      "Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.",
    images: [
      "https://i.imgur.com/NWIJKUj.jpeg",
      "https://i.imgur.com/Jn1YSLk.jpeg",
      "https://i.imgur.com/VNZRvx5.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 31,
    title: "Modern Elegance Teal Armchair",
    price: 25,
    description:
      "Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.",
    images: [
      "https://i.imgur.com/6wkyyIN.jpeg",
      "https://i.imgur.com/Ald3Rec.jpeg",
      "https://i.imgur.com/dIqo03c.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 32,
    title: "Elegant Solid Wood Dining Table",
    price: 67,
    description:
      "Enhance your dining space with this sleek, contemporary dining table, crafted from high-quality solid wood with a warm finish. Its sturdy construction and minimalist design make it a perfect addition for any home looking for a touch of elegance. Accommodates up to six guests comfortably and includes a striking fruit bowl centerpiece. The overhead lighting is not included.",
    images: [
      "https://i.imgur.com/4lTaHfF.jpeg",
      "https://i.imgur.com/JktHE1C.jpeg",
      "https://i.imgur.com/cQeXQMi.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 33,
    title: "Modern Minimalist Workstation Setup",
    price: 49,
    description:
      "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
    images: [
      "https://i.imgur.com/3oXNBst.jpeg",
      "https://i.imgur.com/ErYYZnT.jpeg",
      "https://i.imgur.com/boBPwYW.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 3,
      name: "Cinema",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T20:21:51.000Z",
    },
  },
  {
    id: 39,
    title: "Vibrant Pink Classic Sneakers",
    price: 84,
    description:
      "Step into style with our Vibrant Pink Classic Sneakers! These eye-catching shoes feature a bold pink hue with iconic white detailing, offering a sleek, timeless design. Constructed with durable materials and a comfortable fit, they are perfect for those seeking a pop of color in their everyday footwear. Grab a pair today and add some vibrancy to your step!",
    images: [
      "https://i.imgur.com/mcW42Gi.jpeg",
      "https://i.imgur.com/mhn7qsF.jpeg",
      "https://i.imgur.com/F8vhnFJ.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 41,
    title: "Futuristic Chic High-Heel Boots",
    price: 36,
    description:
      "Elevate your style with our cutting-edge high-heel boots that blend bold design with avant-garde aesthetics. These boots feature a unique color-block heel, a sleek silhouette, and a versatile light grey finish that pairs easily with any cutting-edge outfit. Crafted for the fashion-forward individual, these boots are sure to make a statement.",
    images: [
      "https://i.imgur.com/HqYqLnW.jpeg",
      "https://i.imgur.com/RlDGnZw.jpeg",
      "https://i.imgur.com/qa0O6fg.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
  {
    id: 42,
    title: "Elegant Patent Leather Peep-Toe Pumps with Gold-Tone Heel",
    price: 53,
    description:
      "Step into sophistication with these chic peep-toe pumps, showcasing a lustrous patent leather finish and an eye-catching gold-tone block heel. The ornate buckle detail adds a touch of glamour, perfect for elevating your evening attire or complementing a polished daytime look.",
    images: [
      "https://i.imgur.com/AzAY4Ed.jpeg",
      "https://i.imgur.com/umfnS9P.jpeg",
      "https://i.imgur.com/uFyuvLg.jpeg",
    ],
    creationAt: "2024-06-12T12:48:40.000Z",
    updatedAt: "2024-06-12T12:48:40.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2024-06-12T12:48:40.000Z",
      updatedAt: "2024-06-12T12:48:40.000Z",
    },
  },
];

const RecommendedProducts = () => {
  const productContainerRef = useRef();

  const scrollLeft = () => {
    if (productContainerRef.current) {
      productContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (productContainerRef.current) {
      productContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <MainContainer>
      <MainHeading>Recommended Products</MainHeading>
      <ButtonsContainer>
        <ScrollButton onClick={scrollLeft}>
          <MdKeyboardArrowLeft />
        </ScrollButton>

        <Products ref={productContainerRef}>
          {recommendedProductList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Products>
        <ScrollButton onClick={scrollRight}>
          <MdKeyboardArrowRight />
        </ScrollButton>
      </ButtonsContainer>
    </MainContainer>
  );
};

export default RecommendedProducts;

const MainContainer = styled.div`
  margin-top: 20px;
`;

const MainHeading = styled.h1`
  font-size: 25px;
  color: #757575;
  font-weight: 500;
  margin-bottom: 10px;
  padding-left: 10px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const ScrollButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Products = styled.ul`
  display: flex;
  overflow: auto;
  flex-grow: 1;
  padding: 10px 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
