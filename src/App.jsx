import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home/home";
import Navbar from "./navbar/navbar";
import ShopCategory from "./shopCategory/shopCategory";
import ProductDetails from "./productDetails/productDetails";
import ProductChekout from "./productChekout/productChekout";
import Contact from "./contact/contact";
import ShoppingCart from "./shoppingCart/shoppingCart";
import Blog from "./blog/blog";
import BlogDetails from "./blogDetails/blogDetails"
import Tracking from "./tracking/tracking";
import Elements from "./elements/elements";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopCategory" element={<ShopCategory />}/>
        <Route path="/productDetails" element={<ProductDetails />}/>
        <Route path="/productChekout" element={<ProductChekout />}/>
        <Route path="/Cart" element={<ShoppingCart />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blogdetails" element={<BlogDetails />}/>
        <Route path="/tracking" element={<Tracking />}/>
        <Route path="/Elements" element={<Elements />}/>

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
