import { StyledLink, MenuNav, MobileMenuContainer } from "./MobileMenu.styled"

const MobileMenu = () => {
  return (
    <MobileMenuContainer>
         <MenuNav>
          <StyledLink to={"/home"}>Main</StyledLink>
          <StyledLink to={"/catalog"}>Cars</StyledLink>
          <StyledLink to={"/favorites"}>Favorites</StyledLink>
        </MenuNav>
    </MobileMenuContainer>
  )
}

export default MobileMenu