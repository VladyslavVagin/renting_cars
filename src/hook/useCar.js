import { useSelector } from "react-redux";
import {
  selectFavorites,
  selectCars,
  selectFilteredCars,
  selectError,
  selectIsLoading,
  selectAll
} from "../redux/selectors";

export const useCar = () => {
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectCars);
  const allCars = useSelector(selectAll);
  const favorites = useSelector(selectFavorites);
  const errorResp = useSelector(selectError);
  const filteredCars = useSelector(selectFilteredCars);

  return { isLoading, cars, allCars, favorites, errorResp, filteredCars };
};
