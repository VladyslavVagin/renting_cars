import { NavLink } from "react-router-dom"
import sprite from "../../icons/icons.svg"
import { HeaderMain, ContainerHeader, IconSvg, MenuNav } from "./Header.styled"


const Header = () => {
  return (
    <HeaderMain>
        <ContainerHeader>
        <div>
            <NavLink to={'/home'}>
                <IconSvg width={32} height={32}>
                    <use xlinkHref={`${sprite}#icon-automobile`}></use>
                </IconSvg>
                <p>VAGA_CARS</p>
            </NavLink>
        </div>
        <MenuNav>
            <NavLink to={'/home'}>Головна</NavLink>
            <NavLink to={'/cars'}>Оголошення</NavLink>
            <NavLink to={'/favorites'}>Моя колекція</NavLink>
        </MenuNav>
        </ContainerHeader>
    </HeaderMain>
  )
}

export default Header