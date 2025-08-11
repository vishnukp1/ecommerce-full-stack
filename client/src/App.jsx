import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Electronics from "./pages/Electronics/Electronics";
import Fasion from "./pages/Fashion/Fasion";
import BabyProducts from "./pages/Babyproducts/BabyProducts";
import Register from "./components/SingIn/Registration";
import Login from "./components/SingIn/SignIn";
import Cart from "./components/Cart/Cart";
import AdminUser from "./pages/adminPage/Adminuser";
import EditUser from "./pages/adminPage/EditUser";
import AdminProduct from "./pages/adminPage/AdminProduct";
import AdminAddproducts from "./pages/adminPage/AdminAddproducts";
import AdminEdit from "./pages/adminPage/AdminEdit";
import { useEffect, useState } from "react";
import Admin from "./pages/adminPage/Admin";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./components/viewmore/ProductDetails";

function App() {
  const location = useLocation();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("adminpage")) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [location]);
  return (
    <>
      {admin ? null : <Navbar />}
      <Routes>
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/electronics" element={<Electronics />} />
        <Route exact path="/fashion" element={<Fasion />} />
        <Route exact path="/babyproducts" element={<BabyProducts />} />
           <Route path="/productdetails" element={<ProductDetail />} />
        <Route element={<Admin />}>
       
       
          <Route path="/adminpage/adminuser" element={<AdminUser />} />
          <Route path="/adminpage/edit-user/:id" element={<EditUser />} />
          <Route path="/adminpage/addproduct" element={<AdminAddproducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
