import { Link } from "react-router-dom";
import sprite from "../../icons/icons.svg";
import {
  HeaderMain,
  ContainerHeader,
  IconSvg,
  MenuNav,
  LogoText,
  Logo,
  StyledLink,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderMain>
      <ContainerHeader>
        <div>
          <Link to={"/home"}>
            <Logo>
              <IconSvg width={32} height={32}>
                <use xlinkHref={`${sprite}#icon-automobile`}></use>
              </IconSvg>
              <LogoText>VCARS</LogoText>
            </Logo>
          </Link>
        </div>
        <MenuNav>
          <StyledLink to={"/home"}>Головна</StyledLink>
          <StyledLink to={"/cars"}>Оголошення</StyledLink>
          <StyledLink to={"/favorites"}>Моя колекція</StyledLink>
        </MenuNav>
      </ContainerHeader>
    </HeaderMain>
  );
};

export default Header;
