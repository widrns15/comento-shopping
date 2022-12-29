import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Basket from "./pages/Basket";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename="il">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/Basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
