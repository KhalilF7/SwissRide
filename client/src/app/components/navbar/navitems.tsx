import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.li`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `};
`;

const NavLink = styled.a<{ menu?: any }>`
  ${tw`
    no-underline
    text-black
  `};

  ${({ menu }) => menu && css`
    ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `};
  `};
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem>
            <NavLink href="#" menu>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" menu>Cars</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" menu>Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" menu>Contact Us</NavLink>
          </NavItem>
        </ListContainer>
      </Menu>
    )
  }

  return (
    <ListContainer>
      <NavItem>
        <NavLink href="#">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Cars</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Services</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Contact Us</NavLink>
      </NavItem>
    </ListContainer>
  );
}