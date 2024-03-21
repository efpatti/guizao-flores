import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SobreNos from "./pages/AboutUs";
import Contato from "./pages/Contato";
import "./App.css";

import Home from "./pages/Homepage";
function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<SobreNos />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
