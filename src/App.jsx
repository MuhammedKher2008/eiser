import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./home/home";
import Navbar from "./navbar/navbar";
import Blog from "./blog/blog";
import Shop from "./shop/shop";
import Pages from "./pages/pages";
import Contact from "./contact/contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
