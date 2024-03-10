import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MobileMenuContainer = styled.div`
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100dvh;
  z-index: 99;
  @media screen and (min-width: 768px){
    display: none;
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  max-width: 100%;
  padding-top: 80px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
  font-size: 24px;
  font-weight: 600;
  border-radius: 8px;
  padding: 6px 18px;
  &.active {
    border: 1px solid white;
  }
`;
