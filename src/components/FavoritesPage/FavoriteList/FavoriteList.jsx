import FavoriteCard from "../FavoriteCard/FavoriteCard"
import { useCar } from "hook/useCar"
import { ListCars } from "./FavoriteList.styled";

const FavoriteList = () => {
 const { favorites } = useCar();

  return (
    <div>
        <ListCars>
            {favorites.map(item => <FavoriteCard item={item} key={item.id}/>)}
        </ListCars>
    </div>
  )
}

export default FavoriteList