import { useDispatch } from "react-redux";
import { useEffect, useState} from "react";
import { fetchCars } from "../redux/operations";
import CarsListCards from "components/CarsPage/CarsListCards/CarsListCards"

const Cars = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const dispatch = useDispatch();
console.log(page);
  useEffect(() => {
    dispatch(fetchCars({page, limit}));
  }, [dispatch, limit, page]);

  return (
    <section>
      <CarsListCards/>
      <button type="button" onClick={() => setPage(prev => prev + 1)}>Load more</button>
    </section>
  )
}

export default Cars