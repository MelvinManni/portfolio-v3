import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import colors from "../../assets/jss/colors";
import logo from "../../assets/images/logo.svg";
import { Text } from "../Typography";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { slideDown, slideUp } from "../../assets/jss/animations";

const Nav = styled.nav`
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media all and (max-width: 960px) {
    padding: 25px 50px;
  }

  @media all and (max-width: 534px) {
    padding: 25px;
  } ;
`;
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoText = styled(Text)`
  @media all and (max-width: 960px) {
    font-size: 16px;
  }
  @media all and (max-width: 340px) {
    display: none;
  } ;
`;
const LogoImage = styled.img`
  width: 107px;
  margin-right: 50px;
  @media all and (max-width: 960px) {
    width: 90px;
    margin-right: 20px;
  }
`;
const NavList = styled.div`
  display: flex;
  align-items: center;
  @media all and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    transition: 0.5s ease-in-out all;
    animation: 0.4s ${(props) => (props.open === true ? slideDown : slideUp)} ease 1 forwards;
  }
`;
const NavLink = styled(Link)`
  font-family: "Sora";
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: ${(props) => (props.active === "active" ? "#1524c6" : colors.BLACK)};
  :nth-child(even) {
    margin: 0 40px;
  }
  &:hover {
    color: #1524c6;
  }
  @media all and (max-width: 960px) {
    font-size: 17px;
  }

  @media all and (max-width: 768px) {
    :nth-child(even) {
      margin: 30px 0px;
    }
    :first-child {
      margin-top: 30px;
    }
    :hover {
      padding-left: 10px;
    }
  }
`;

const Toggle = styled.button`
  height: 45px;
  width: 45px;
  padding: 9px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 1px 1px 8px 0px rgba(50, 50, 50, 0.15);
  -moz-box-shadow: 1px 1px 8px 0px rgba(50, 50, 50, 0.15);
  box-shadow: 1px 1px 8px 0px rgba(50, 50, 50, 0.15);
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  display: none;

  @media all and (max-width: 768px) {
    display: flex;
  } ;
`;

const route = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
  // { name: "Experience", path: "/experience" },
];

export default function Navbar(props) {
  const path = useLocation().pathname;
  const getActiveRoute = (currentPath) => (path === currentPath ? "active" : undefined);
  const [open, setOpen] = React.useState(false);

  return (
    <header style={{ borderBottom: " 0.4px solid #eee" }}>
      <Nav>
        <Logo to="/">
          <LogoImage src={logo} />
          <LogoText color="logo" size="18" height="19.08">
            Software <br />
            Developer
          </LogoText>
        </Logo>
        <Toggle onClick={() => setOpen(!open)}>{open ? <AiOutlineMenuUnfold size={33} /> : <AiOutlineMenuFold size={33} />}</Toggle>
        <NavList open={open}>
          {route.map((item, indx) => (
            <NavLink onClick={() => setOpen(!open)} key={indx} active={getActiveRoute(item.path)} to={item.path}>
              {item.name}
            </NavLink>
          ))}
        </NavList>
      </Nav>
    </header>
  );
}
