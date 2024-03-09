import { useSelector } from "react-redux";
import {
  selectFavorites,
  selectCars,
  selectFilteredCars,
  selectError,
  selectIsLoading,
} from "redux/selectors";

export const useCar = () => {
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);
  const errorResp = useSelector(selectError);
  const filteredCars = useSelector(selectFilteredCars);

  return { isLoading, cars, favorites, errorResp, filteredCars };
};
