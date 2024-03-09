import {
  CardTitle,
  Description,
  ImageCar,
  InfoList,
  ListConditions,
  RentalCarBtn,
  SubTitle,
} from "./Details.styled";

const Details = ({ car }) => {
  const {
    img,
    description,
    make,
    model,
    rentalPrice,
    address,
    rentalConditions,
    type,
    year,
    mileage,
    functionalities,
    accessories,
    engineSize,
    fuelConsumption,
    id,
  } = car;

  let parts = [];
  let country = "";
  let city = "";
  let accAndFunct = accessories.concat(functionalities);
  let conditionsForRent = rentalConditions.split("\n");
  let minAge = parseInt(conditionsForRent[0].split(": ")[1]);
  let mileageChanged = mileage.toLocaleString('en-US');

  if (address) {
    parts = address?.split(",");
    country = parts[parts.length - 1].trim() || "";
    city = parts[parts.length - 2].trim() || "";

    return (
      <div>
        <div>
          <ImageCar src={img} alt={model} width={461} height={248} />
        </div>
        <CardTitle>
          {make}&nbsp;<span>{model}</span>,&nbsp;{year}
        </CardTitle>
        <InfoList>
          <li>{city}</li>
          <li>{country}</li>
          <li>Id: {id}</li>
          <li>Year: {year}</li>
          <li>Type: {type}</li>
          <li>Fuel Consumption: {fuelConsumption}</li>
          <li>Engine Size: {engineSize}</li>
        </InfoList>
        <Description>{description}</Description>
        <SubTitle>
          <p>Accessories and functionalities:</p>
          <InfoList>
            {accAndFunct.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </InfoList>
        </SubTitle>
        <SubTitle>
          <p>Rental conditions:</p>
          <ListConditions>
            <li>
              Minimum age: <span>{minAge}</span>
            </li>
            <li>{conditionsForRent[1]}</li>
            <li>{conditionsForRent[2]}</li>
            <li>
              Mileage: <span>{mileageChanged}</span>
            </li>
            <li>
              Price: <span>{rentalPrice}</span>
            </li>
          </ListConditions>
        </SubTitle>
        <RentalCarBtn xlinkHref={`tel:+380730000000`}>Rental car</RentalCarBtn>
      </div>
    );
  }
};
export default Details;
