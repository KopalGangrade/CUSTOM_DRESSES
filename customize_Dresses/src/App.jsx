import React from "react";
import AppProvider from "./Context";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Design from "./components/Design";
import Customization from "./components/Customization";
import ProductCatalogue from "./components/ProductCatalogue";
import CulturalDress from "./components/CulturalDress";

const App = () => {

  return (
    <AppProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/product" element={<ProductCatalogue />} />
        <Route path="/culture" element={<CulturalDress />} />
      </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;

