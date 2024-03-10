import { useSelector, useDispatch } from "react-redux";
import { selectFilteredCars } from "../../../redux/selectors";
import { fetchFilteredCars } from "../../../redux/operations";
import CarsCard from "../CarsCard/CarsCard";
import { ListCars } from "./CarsListCards.styled";
import { useEffect } from "react";
import { useCar } from "hook/useCar";

const CarsListCards = ({filterCars}) => {
  const dispatch = useDispatch();
  const {cars} = useCar();
  const filteredCars = useSelector(selectFilteredCars);

  useEffect(() => {
   if(filterCars !== "") {
    dispatch(fetchFilteredCars({filter: filterCars}));
   }
  }, [dispatch, filterCars])

  return (
    <div>
      <ListCars>
        {filteredCars.length > 0 && filterCars !== "" ? filteredCars.map((car, index) => (
          <CarsCard car={car} key={`${car.id}-${index}`} />
        )) : cars.map((car, index) => (
          <CarsCard car={car} key={`${car.id}-${index}`} />
        ))}
      </ListCars>
    </div>
  );
};

export default CarsListCards;
