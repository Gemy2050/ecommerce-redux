import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    localStorage.setItem("shop-cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Products />
            </>
          }
        />
        <Route path="products" element={<Products />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
