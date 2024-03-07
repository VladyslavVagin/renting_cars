import { Routes, Route } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from "../redux/operations";
import SharedLayout from "./SharedLayout/SharedLayout";
import Homepage from "pages/Homepage";
import Cars from "pages/Cars";
import Favorites from "pages/Favorites";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/home" element={<Homepage/>} />
          <Route path="/cars" element={<Cars/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
