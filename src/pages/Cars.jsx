import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectCars } from "../redux/selectors";
import { fetchCars } from "../redux/operations";

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  console.log(cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>Cars</div>
  )
}

export default Cars