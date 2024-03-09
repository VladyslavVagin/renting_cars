import { Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import Homepage from "pages/Homepage";
import Cars from "pages/Cars";
import Favorites from "pages/Favorites";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/home" element={<Homepage/>} />
          <Route path="/catalog" element={<Cars/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
