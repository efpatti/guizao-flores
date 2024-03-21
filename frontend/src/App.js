import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SobreNos from "./pages/aboutus";
import Catalogo from "./pages/Catalogo";
import CartProvider from "./cartContext";
import "./App.css";

import Home from "./pages/Homepage";
function App() {
  return (
    <ChakraProvider>
      <CartProvider>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<SobreNos />} />
            <Route path="products" element={<Catalogo />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;
