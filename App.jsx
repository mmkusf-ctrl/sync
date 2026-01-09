import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import Checkout from "./pages/Checkout";
import "./style.css";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}
