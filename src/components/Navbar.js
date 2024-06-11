import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";

const NavbarLinks = [
  {
    id: "SEARCH",
    name: "Search",
    icon: <IoSearch fontSize={33} />,
    route: "/search",
    title: "Search",
  },
  {
    id: "USER",
    name: "User",
    icon: <FaRegUser fontSize={28} />,
    route: "/user-profile",
    title: "Profile",
  },
  {
    id: "CART",
    name: "Cart",
    icon: <AiOutlineShoppingCart fontSize={30} />,
    route: "/cart",
    title: "Cart",
  },
  {
    id: "ABOUT_US",
    name: "AboutUs",
    icon: <BiMessageSquareDetail fontSize={30} />,
    route: "/about-us",
    title: "About Us",
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  const renderLogo = () => (
    <LogoTxt onClick={() => navigate("/")}>Logo</LogoTxt>
  );

  const isLinkActive = (route) => {
    const url = new URL(window.location.href);
    const pathname = url.pathname;
    return pathname === route;
  };

  const renderNavLinks = () => {
    return (
      <NavLinksContainer>
        {NavbarLinks.map((link) => (
          <CustomNavLink
            key={link.id}
            to={link.route}
            title={link.title}
            isActive={isLinkActive(link.route)}
          >
            <LinkButton isActive={isLinkActive(link.route)}>
              {link.icon}
            </LinkButton>
            <LinkName isActive={isLinkActive(link.route)}>{link.name}</LinkName>
          </CustomNavLink>
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
  cursor: pointer;
`;

const NavLinksContainer = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
`;

const CustomNavLink = styled(NavLink)`
  color: ${({ isActive }) => (isActive ? "red" : "#fff")};
  background-color: ${({ isActive }) => (isActive ? "#c8e6c9" : "transparent")};
  border-radius: 5px;

  @media screen and (min-width: 576px) {
    padding: 5px;
  }
`;

const LinkButton = styled.button`
  height: 40px;
  padding: 3px;
  border-radius: 5px;
  border: none;
  background-color: ${({ isActive }) => (isActive ? "#c8e6c9" : "transparent")};
  color: ${({ isActive }) => (isActive ? "#757575" : "#fff")};

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

const LinkName = styled.p`
  color: ${({ isActive }) => (isActive ? "#757575" : "#fff")};
  font-size: 18px;

  @media screen and (max-width: 576px) {
    display: none;
  }
`;
