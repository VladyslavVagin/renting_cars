import { useSelector, useDispatch } from "react-redux";
import { selectCars, selectFilteredCars } from "../../../redux/selectors";
import { fetchFilteredCars } from "../../../redux/operations";
import CarsCard from "../CarsCard/CarsCard";
import { ListCars } from "./CarsListCards.styled";
import { useEffect } from "react";

const CarsListCards = ({filterCars}) => {
  const dispatch = useDispatch();
  const carsPerPage = useSelector(selectCars);
  const filteredCars = useSelector(selectFilteredCars);

  useEffect(() => {
   if(filterCars !== "") {
    dispatch(fetchFilteredCars({filter: filterCars}));
   } else {
    console.log("No filter");
   }
  }, [dispatch, filterCars])

  return (
    <div>
      <ListCars>
        {filteredCars.length > 0 && filterCars !== "" ? filteredCars.map((car, index) => (
          <CarsCard car={car} key={`${car.id}-${index}`} />
        )) : carsPerPage.map((car, index) => (
          <CarsCard car={car} key={`${car.id}-${index}`} />
        ))}
      </ListCars>
    </div>
  );
};

export default CarsListCards;
