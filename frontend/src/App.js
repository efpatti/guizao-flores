import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./cartContext";
import Home from "./pages/Homepage";
import AboutUs from "./pages/AaboutUs";
import Catalogo from "./pages/Catalogo";
import Pagamento from "./pages/Pagamento";
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
          </Routes>
        </Router>
      </ChakraProvider>
    </CartProvider>
  );
}

export default App;
