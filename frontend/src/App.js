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
  );
}

export default App;
