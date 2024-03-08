import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCars } from "../redux/operations";
import CarsListCards from "components/CarsPage/CarsListCards/CarsListCards";
import { LoadMoreBtn, TextEnd } from "./Cars.styled";

const Cars = () => {
  const [page, setPage] = useState(0);
  const [limit] = useState(12);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page === 0) {
      setPage(1);
    }
    dispatch(fetchCars({ page, limit }));
  }, [dispatch, limit, page]);

  return (
    <section>
      <CarsListCards />
      {page >= 3 ? (
        <TextEnd>The END of collection!</TextEnd>
      ) : (
        <LoadMoreBtn type="button" onClick={() => setPage((prev) => prev + 1)}>
          Load more
        </LoadMoreBtn>
      )}
    </section>
  );
};

export default Cars;
