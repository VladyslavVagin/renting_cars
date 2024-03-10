import { StyledLink, MenuNav } from "./MobileMenu.styled"

const MobileMenu = () => {
  return (
    <div>
         <MenuNav>
          <StyledLink to={"/home"}>Main</StyledLink>
          <StyledLink to={"/catalog"}>Cars</StyledLink>
          <StyledLink to={"/favorites"}>Favorites</StyledLink>
        </MenuNav>
    </div>
  )
}

export default MobileMenu