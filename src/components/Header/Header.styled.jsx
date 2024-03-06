import styled from "styled-components";

export const HeaderMain = styled.header`
  padding: 20px 0;
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  -webkit-box-shadow: 0px 3px 26px 1px rgba(0, 0, 0, 0.92);
  -moz-box-shadow: 0px 3px 26px 1px rgba(0, 0, 0, 0.92);
  box-shadow: 0px 3px 26px 1px rgba(0, 0, 0, 0.92);
`;

export const ContainerHeader = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconSvg = styled.svg`
  fill: white;
`;

export const MenuNav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 28px;
`;
