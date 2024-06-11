import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavbarLinks = [
  {
    id: "SEARCH",
    name: "search",
    icon: <IoSearch color="#fff" fontSize={33} />,
    route: "/search",
    title: "Search",
  },
  {
    id: "USER",
    name: "user",
    icon: <FaRegUser color="#fff" fontSize={28} />,
    route: "/user-profile",
    title: "Profile",
  },
  {
    id: "CART",
    name: "cart",
    icon: <AiOutlineShoppingCart color="#fff" fontSize={30} />,
    route: "/cart",
    title: "Cart",
  },
  {
    id: "ABOUT_US",
    name: "aboutUs",
    icon: <BiMessageSquareDetail color="#fff" fontSize={30} />,
    route: "/about-us",
    title: "About Us",
  },
];

const Navbar = () => {
  const renderLogo = () => <LogoTxt>Logo</LogoTxt>;

  const renderNavLinks = () => {
    return (
      <NavLinksContainer>
        {NavbarLinks.map((link) => (
          <Link key={link.id} to={link.route} title={link.title}>
            <LinkButton>{link.icon}</LinkButton>
          </Link>
        ))}
      </NavLinksContainer>
    );
  };

  return (
    <MainContainer>
      {renderLogo()}
      {renderNavLinks()}
    </MainContainer>
  );
};

export default Navbar;

const MainContainer = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #4caf50;
  color: #fff;
`;

const LogoTxt = styled.h1`
  font-size: 30px;
`;

const NavLinksContainer = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
`;

const LinkButton = styled.button`
  height: 50px;
  width: 35px;
  border: none;
  background-color: transparent;
`;
