import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home/home";
import Navbar from "./navbar/navbar";
import ShopCategory from "./shopCategory/shopCategory";
import ProductDetails from "./productDetails/productDetails";
import Contact from "./contact/contact";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopCategory" element={<ShopCategory />}/>
        <Route path="/productDetails" element={<ProductDetails />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
