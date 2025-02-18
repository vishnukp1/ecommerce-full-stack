const {
  userRegister,
  userlogin,
  addToWishlist,
  addToCart,
  getWishlistByUserId,
  getCartByUserId,
  deleteFromWishlist,
  payment,
  deleteFromCart,
  updateCartQuantity,
} = require("../controller/user");
cons = require("../middleware/userAuth");
const {
  getProductsByCategory,
  getAllProducts,
  getProductById,
  searchStock,
} = require("../controller/product");

const trycatch = require("../middleware/trycatchp");

const express = require("express");
const userVerify = require("../middleware/userAuth");

const router = express.Router();

router.post("/api/users/login", trycatch(userlogin));

router.post("/api/users/register", trycatch(userRegister));

router.get("/api/users/products", trycatch(getAllProducts));

router.get("/api/users/products/:id", trycatch(getProductById)); 

router.get(
  "/api/products/category/:category",trycatch(getProductsByCategory)
);     

router.get("/api/users/:id/cart", trycatch(getCartByUserId));

router.post("/api/users/:id/cart", trycatch(addToCart));

router.patch("/api/users/:id/cart", updateCartQuantity);


router.delete("/api/users/:userId/deleteCart/:id", trycatch(deleteFromCart));

router.post("/api/users/:id/wishlists", trycatch(addToWishlist));

router.get(  
  "/api/users/:id/wishlists",   
  trycatch(getWishlistByUserId)  
);  
 
router.delete(
  "/api/users/:id/wishlists",
  trycatch(deleteFromWishlist)
);

router.post("/api/payment/:id", trycatch(payment));

router.get("/api/stock/:name", trycatch(searchStock));

module.exports = router;
