import {
  CarImage,
  CarInfoList,
  Card,
  CardTitle,
  CardTitleContainer,
  ImageContainer,
  LearMoreBtn,
} from "./CarsCard.styled";
import { createPortal } from "react-dom";
import { useState } from "react";
import ModalCarDetails from "components/ModalCarDetails/ModalCarDetails";

const CarsCard = ({ car }) => {
  const [showModal, setShowModal] = useState(false);
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
  } = car;

  let parts = [];
  let country = "";
  let city = "";

  if (address) {
    parts = address?.split(",");
    country = parts[parts.length - 1].trim() || "";
    city = parts[parts.length - 2].trim() || "";
  }
  let premiumCar = description?.toLowerCase().includes("premium")
    ? "Premium"
    : "";

  return (
    <>
      <Card>
        <ImageContainer>
          <CarImage src={img} alt={description} width={274} height={268} />
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
            <li>{mileage}</li>
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
            car={car}
            onClose={() => setShowModal(false)}
            setShowModal={setShowModal}
            showModal={showModal}
          />,
          document.body
        )}
    </>
  );
};

export default CarsCard;
