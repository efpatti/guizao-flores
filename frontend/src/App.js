import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./CartContext";
import Home from "./pages/Homepage";
import AboutUs from "./pages/AaboutUs";
import Catalogo from "./pages/Catalogo";
import Pagamento from "./pages/Pagamento";
import Contato from "./pages/Contato";
import NavBar from "./components/NavBar";

function App() {
  return (
    <CartProvider>
      <ChakraProvider>
        <NavBar />
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="products" element={<Catalogo />} />
            <Route path="payment" element={<Pagamento />} />
            <Route path="contact" element={<Contato />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </CartProvider>
  );
}

export default App;
