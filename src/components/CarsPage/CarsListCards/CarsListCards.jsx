import { useDispatch } from "react-redux";
import { fetchFilteredCars } from "../../../redux/operations";
import CarsCard from "../CarsCard/CarsCard";
import { useEffect } from "react";
import { useCar } from "hook/useCar";
import { ListCars } from "./CarsListCards.styled";

const CarsListCards = ({ filterCars, price }) => {
  const dispatch = useDispatch();
  const { cars, filteredCars, allCars } = useCar();
  let filteredByPriceModel;

  if (price !== "") {
    if (filteredCars.length > 0) {
      filteredByPriceModel = filteredCars.filter(
        (car) => car.rentalPrice === price
      );
      console.log(filteredByPriceModel);
    } else {
      filteredByPriceModel = allCars.filter((car) => car.rentalPrice === price);
      console.log(filteredByPriceModel);
    }
  }

  useEffect(() => {
    if (filterCars !== "") {
      dispatch(fetchFilteredCars({ filter: filterCars }));
    } else {
      dispatch(fetchFilteredCars({ filter: [] }));
    }
  }, [dispatch, filterCars]);

  return (
    <div>
      <ListCars>
        {filteredCars.length > 0 && filterCars !== ""
          ? price === ""
            ? filteredCars.map((car, index) => (
                <CarsCard car={car} key={`${car.id}-${index}`} />
              ))
            : filteredByPriceModel.map((car, index) => (
                <CarsCard car={car} key={`${car.id}-${index}`} />
              ))
          : price === ""
          ? cars.map((car, index) => (
              <CarsCard car={car} key={`${car.id}-${index}`} />
            ))
          : filteredByPriceModel.map((car, index) => (
              <CarsCard car={car} key={`${car.id}-${index}`} />
            ))}
      </ListCars>
    </div>
  );
};

export default CarsListCards;
