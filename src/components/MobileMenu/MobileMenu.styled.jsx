import styled from "styled-components"
import { NavLink } from "react-router-dom";

export const MenuNav = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    column-gap: 28px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  padding: 6px 18px;
  &.active {
    border: 1px solid white;
  }
`;

