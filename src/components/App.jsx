import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import Homepage from "pages/Homepage";
import Cars from "pages/Cars";
import Favorites from "pages/Favorites";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/home" element={<Homepage/>} />
          <Route path="/catalog" element={<Cars/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
