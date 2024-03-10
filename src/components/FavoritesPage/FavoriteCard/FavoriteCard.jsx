import { useState } from "react";
import { createPortal } from "react-dom";
import { useCar } from "hook/useCar";
import {
    CarImage,
    CarInfoList,
    Card,
    CardTitle,
    CardTitleContainer,
    HeartBtn,
    ImageContainer,
    LearMoreBtn,
  } from "./FavoriteCard.styled";
  import ModalCarDetails from "components/ModalCarDetails/ModalCarDetails";
  import { removeCardFromFavorite } from "../../../redux/operations";
  import sprite from "icons/icons.svg";
import { useDispatch } from "react-redux";

const FavoriteCard = ({ item }) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const { favorites } = useCar();
  const {
    img,
    description,
    make,
    model,
    rentalPrice,
    address,
    rentalCompany,
    type,
    year,
    mileage,
    functionalities,
    id,
  } = item;

  let parts = [];
  let country = "";
  let city = "";
  let mileageChanged = mileage.toLocaleString("en-US");

  if (address) {
    parts = address?.split(",");
    country = parts[parts.length - 1].trim() || "";
    city = parts[parts.length - 2].trim() || "";
  }
  let premiumCar = description?.toLowerCase().includes("premium")
    ? "Premium"
    : "";

    const removeFavorite = () => {
      if (favorites.find(car => car.id === id)) {
        let newFavorites = favorites.filter(el => el.id !== id);
        dispatch(removeCardFromFavorite(newFavorites)); 
      }
  }

  return ( <>
    <Card>
      <ImageContainer>
        <CarImage src={img} alt={description} width={274} height={268} />
        <HeartBtn type="button" id={id} onClick={removeFavorite}>
          <svg width={24} height={24} style={favorites.find(car => car.id === id) ? {fill: '#a72f2f', stroke: "#a72f2f"} : {fill: 'transparent'}}>
            <use xlinkHref={`${sprite}#icon-heart`}></use>
          </svg>
        </HeartBtn>
      </ImageContainer>
      <CardTitleContainer>
        <CardTitle>
          {make}&nbsp;
          <span>{model}</span>,&nbsp;
          {year}
        </CardTitle>
        <p>{rentalPrice}</p>
      </CardTitleContainer>
      <div>
        <CarInfoList>
          <li>{city}</li>
          <li>{country}</li>
          <li>{rentalCompany}</li>
          <li>{premiumCar}</li>
          <li>{type}</li>
          <li>{model}</li>
          <li>{mileageChanged}</li>
          <li>{functionalities ? functionalities[0] : ""}</li>
        </CarInfoList>
      </div>
      <LearMoreBtn type="button" onClick={() => setShowModal(true)}>
        Learn more
      </LearMoreBtn>
    </Card>
    {showModal &&
      createPortal(
        <ModalCarDetails
          car={item}
          onClose={() => setShowModal(false)}
          setShowModal={setShowModal}
          showModal={showModal}
        />,
        document.body
      )}
  </>);
};

export default FavoriteCard;
