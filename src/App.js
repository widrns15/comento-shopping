import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Basket from "./pages/Basket";

import "./App.css";

function App() {
  return (
    <HashRouter>
      {/* basename="il" 삭제해야 함 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
