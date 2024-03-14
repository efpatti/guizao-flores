import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import SobreNos from "./pages/aboutus";

import "./App.css";
function App() {
  return (
    <>
      <ChakraProvider>
        <h1>App</h1>
      </ChakraProvider>
      <SobreNos />
    </>
  );
}

export default App;
