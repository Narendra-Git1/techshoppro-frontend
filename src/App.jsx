import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/products/ProductDetails";

function App() {

  return (

    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/products"
          element={<Products />}
        />
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

      </Routes>

    </>
  );
}

export default App;