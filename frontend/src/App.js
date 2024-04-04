<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <ChakraProvider>
      <h1 className="text-center">CADASTRO</h1>
      <Cadastro />

      <br></br>
    </ChakraProvider>
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./CartContext";
import Home from "./pages/Homepage";
import AboutUs from "./pages/AaboutUs";
import Catalogo from "./pages/Catalogo";
import Contato from "./pages/Contato";
import NavBar from "./components/NavBar";
import Payment from "./pages/Payment";
import SignIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/Catalogo/productDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <Router>
        <ChakraProvider>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/products" element={<Catalogo />} />
            <Route
              path="products/details/:productId"
              element={<ProductDetails />}
            />
            <Route path="/payment" element={<Payment />} />
            <Route path="/contact" element={<Contato />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </ChakraProvider>
      </Router>
    </CartProvider>
>>>>>>> 79ec174d004d19ab28d3911460be45cdf276ab24
  );
}

export default App;
