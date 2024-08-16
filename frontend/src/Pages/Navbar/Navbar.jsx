import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import logo from '../Free/logo bg 2.png';

const DrawerButton = styled.button`
  all: unset;
  font-size: 3rem;
  display: grid;
  flex-direction: flex-start;
  @media (min-width: 992px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  background-color: #000;
`;
const NavContainer = styled.div`
  height: 90px;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  @media(max-width:992px){
  max-width:97%
  }
`;
const SNavbarBrand = styled.div`
 display: flex;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  text-align: start;

  img {
    height: 58px;
    margin-right: 1rem; 
  }

  @media (max-width: 992px) {
  text-align: end;
    font-size: 3rem; 
  }

`;
const RightNav = styled.div`
  display: flex;
  gap: 2rem;
 
`;
const NavRoutes = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  align-items: center;
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0.5rem 0.8rem;
  position: relative;
  transition: 0.5s ease;

  &::before,
  &::after {
    content: '';
    height: 14px;
    width: 14px;
    position: absolute;
    transition: all 0.35s ease;
    opacity: 0;
  }

  &::before {
    right: 0;
    top: 0;
    border-top: 3px solid #148983;
    border-right: 3px solid #148983;
    transform: translate(-100%, 50%);
  }

  &::after {
    left: 0;
    bottom: 0;
    border-bottom: 3px solid #148983;
    border-left: 3px solid #148983;
    transform: translate(100%, -50%);
  }

  &:hover::before,
  &:hover::after {
    transform: translate(0, 0);
    opacity: 1;
  }

  &:hover {
    color: #148983;
  }
    
`;


const LoginButton = styled.button`
  position: relative;
  padding: 0.7rem 3rem;
  background-color: white;
  border-radius: 3rem;
  transition: 0.3s ease;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 3rem;
    background: #148983;
    transition: 0.5s;
    transform: scale(0.9);
    z-index: -1;
  }

  &:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 25px #ffffff;
  }

  &:hover {
  color:black;
    background  : #148983;
    box-shadow: 0 0 20px #ffffff;
    text-shadow: 0 0 20px #ffffff;
  }
      @media (max-width: 700px) {
    display: none;
  }

`;
const Navbar = ({ toggleDrawer, routes }) => {
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <FaBars />
        </DrawerButton>
        <SNavbarBrand> <img src={logo} alt="Logo" />Smarty App Solution</SNavbarBrand>
        <RightNav>
          <NavRoutes>
            {routes.map((route) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <NavRoute to={route.link} key={route.name}>
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
          <LoginButton>Contact US</LoginButton>
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar


