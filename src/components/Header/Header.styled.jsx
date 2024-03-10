import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderMain = styled.header`
  padding: 20px 0;
  background-color: var(--header-bgColor);
  background-image: var(--header-bgImage);
  -webkit-box-shadow: 0px 3px 26px 1px rgba(0, 0, 0, 0.92);
  -moz-box-shadow: 0px 3px 26px 1px rgba(0, 0, 0, 0.92);
  box-shadow: 0px 3px 26px 1px rgba(0, 0, 0, 0.92);
`;

export const ContainerHeader = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const IconSvg = styled.svg`
  fill: var(--white-color);
`;

export const MenuNav = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    column-gap: 28px;
  }
`;

export const LogoText = styled.p`
  color: var(--white-color);
  font-family: "Inter";
  font-size: 28px;
  font-weight: 700;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  color: var(--white-color);
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  padding: 6px 18px;
  &.active {
    border: 1px solid var(--white-color);
  }
`;

export const BurgerBtn = styled.button`
  outline: none;
  border: none;
  background-color: inherit;
  svg {
    fill: var(--white-color);
    transition: var(--animation-hover);
  }
  &:hover svg, 
  &:focus svg {
    transform: scale(1.1) rotate(360deg);
  }
  @media screen and (min-width: 768px){
    display: none;
  }
`