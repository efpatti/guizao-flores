import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./CartContext";
import Home from "./pages/Homepage";
import AboutUs from "./pages/AaboutUs";
import Catalogo from "./pages/Catalogo";
import Contato from "./pages/Contato";
import NavBar from "./components/NavBar";
import Payment from "./pages/Payment";

function App() {
  return (
    <CartProvider>
      <Router>
        <ChakraProvider>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="products" element={<Catalogo />} />
            <Route path="payment" element={<Payment />} />
            <Route path="contact" element={<Contato />} />
          </Routes>
        </ChakraProvider>
      </Router>
    </CartProvider>
  );
}

export default App;
