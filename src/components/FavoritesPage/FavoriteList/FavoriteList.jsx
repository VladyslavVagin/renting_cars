import FavoriteCard from "../FavoriteCard/FavoriteCard";
import { useCar } from "hook/useCar";
import { ImageContainerMechanic, ListCars } from "./FavoriteList.styled";
import mechanicImage from "images/mechanic.png";

const FavoriteList = () => {
  const { favorites } = useCar();

  return (
    <div>
      <ListCars>
        {favorites.map((item) => (
          <FavoriteCard item={item} key={item.id} />
        ))}
      </ListCars>
      {favorites.length === 0 && (
        <ImageContainerMechanic>
          <img src={mechanicImage} alt="mechanic" width={200} height={400} />
          <p>You haven't added any cars to favorites yet!</p>
        </ImageContainerMechanic>
      )}
    </div>
  );
};

export default FavoriteList;
