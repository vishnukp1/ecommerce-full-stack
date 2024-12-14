import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Electronics from "./pages/Electronics/Electronics";
import Fasion from "./pages/Fashion/Fasion";
import BabyProducts from "./pages/Babyproducts/BabyProducts";
import Register from "./components/SingIn/Registration";
import Login from "./components/SingIn/SignIn";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Routes>
      <Route exact path="/signin" element={<Register />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/electronics" element={<Electronics />} />
        <Route exact path="/fashion" element={<Fasion />} />
        <Route exact path="/babyproducts" element={<BabyProducts />} />
      </Routes>
    
    </>
  );
}

export default App;
