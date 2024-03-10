import { Link, useLocation } from "react-router-dom";
import sprite from "../../icons/icons.svg";
import {
  HeaderMain,
  ContainerHeader,
  IconSvg,
  MenuNav,
  LogoText,
  Logo,
  StyledLink,
  BurgerBtn,
} from "./Header.styled";
import { useEffect, useState } from "react";
import MobileMenu from "components/MobileMenu/MobileMenu";

const Header = () => {
 const [showMenu, setIsShowMenu] = useState(false);
 const location = useLocation();

 useEffect(() => {
  setIsShowMenu(false);
 }, [location.pathname])

  return (<>
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
          <StyledLink to={"/home"}>Main</StyledLink>
          <StyledLink to={"/catalog"}>Cars</StyledLink>
          <StyledLink to={"/favorites"}>Favorites</StyledLink>
        </MenuNav>
        <BurgerBtn onClick={() => setIsShowMenu(prev => !prev)}>
         {showMenu ? <svg width={34} height={34}>
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg> : <svg width={34} height={34}>
            <use xlinkHref={`${sprite}#icon-menu`}></use>
          </svg>} 
        </BurgerBtn>
        {showMenu && <MobileMenu/>} 
      </ContainerHeader>
    </HeaderMain>
</>
  );
};

export default Header;
