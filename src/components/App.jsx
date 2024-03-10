import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { lazy, useEffect } from "react";
import SharedLayout from "./SharedLayout/SharedLayout";
import { fetchAllCars } from "../redux/operations";

const Homepage = lazy(() => import("pages/Homepage"));
const Cars = lazy(() => import("pages/Cars"));
const Favorites = lazy(() => import("pages/Favorites"));

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  if (location.pathname === "/") {
    location.pathname = "/home";
  }

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch])

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/home" element={<Homepage />} />
          <Route path="/catalog" element={<Cars />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
