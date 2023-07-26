import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductList from "./Components/ProductList";
import ProductDetailPage from "./Components/ProductDetailPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route exact path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
