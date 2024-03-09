import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import SharedLayout from "./SharedLayout/SharedLayout";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import Homepage from "pages/Homepage";
import Cars from "pages/Cars";
import Favorites from "pages/Favorites";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

const App = () => {
const location = useLocation();
const {isLoggedIn} = useAuth();

if(isLoggedIn && location.pathname === "/") {
  location.pathname = "/home";
}


  return (
    <>
      <Routes>
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />}/>}/>
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Signup />}/>}/>
        <Route path="/" element={<PrivateRoute redirectTo="/login" component={<SharedLayout />}/>}>
          <Route index path="/home" element={<PrivateRoute redirectTo="/login" component={<Homepage />}/>} />
          <Route path="/catalog" element={<PrivateRoute redirectTo="/login" component={<Cars />}/>}/>
          <Route path="/favorites" element={<PrivateRoute redirectTo="/login" component={<Favorites />}/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
