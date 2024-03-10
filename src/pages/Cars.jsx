import { useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { fetchCars } from "../redux/operations";
import CarsListCards from "components/CarsPage/CarsListCards/CarsListCards";
import SearchBar from "components/CarsPage/SearchBar/SearchBar";
import { LoadMoreBtn, TextEnd } from "./Cars.styled";
import { useCar } from "hook/useCar";
import Loader from "components/Loader/Loader";

const Cars = () => {
  const [filterCars, setFilter] = useState('');
  const [price, setPrice] = useState('');
  const [page, setPage] = useState(0);
  const [limit] = useState(12);
  const prevPage = useRef(0);
  const dispatch = useDispatch();
  const {cars, isLoading} = useCar();

  useEffect(() => {
    if (page > 0 && page !== prevPage.current) {
        dispatch(fetchCars({ page, limit }));
    } 

    prevPage.current = page;
}, [dispatch, limit, page])


if(cars.length < 1 && page === 0) {
  setPage(1);
}

  return (
    <section>
      <SearchBar setFilter={setFilter} setPrice={setPrice}/>
      <CarsListCards filterCars={filterCars} price={price}/>
      {cars.length > 24 ? (
        <TextEnd>The END of collection!</TextEnd>
      ) : (
        <LoadMoreBtn type="button" onClick={() => setPage((prev) => prev + 1)}>
         {isLoading ? <Loader/> : 'Load more'}
        </LoadMoreBtn>
      )}
    </section>
  );
};

export default Cars;
