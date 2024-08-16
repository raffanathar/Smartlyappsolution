import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SubRoutesContainer = styled.div`
  position: absolute;
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  top: 100%;
  left: 0;
  visibility: hidden;
  background-color:white;
  opacity: 0;
  border-radius: 1rem;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index:999;
`;
const SMenu = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${SubRoutesContainer} {
    visibility: visible;
    opacity: 1;
    cursor: pointer;
  }
`;

const MenuButton = styled.div`
  padding: 1rem;
  position: relative;
  color: white;
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

const SubRoute = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  border-radius: 0.5rem;
  position: relative;
  transition: 0.3s ease-in;

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
    transition: 0.3s ease-in;
    color: #148983;
  }
`;

const Menu = ({ route }) => {
  return (
    <SMenu>
      <MenuButton>{route.name}</MenuButton>
      <SubRoutesContainer>
        {route.subRoutes.map((subRoute) => (
          <SubRoute to={subRoute.link} key={subRoute.name}>
            {subRoute.name}
          </SubRoute>
        ))}
      </SubRoutesContainer>
    </SMenu>
  );
};

export default Menu;
