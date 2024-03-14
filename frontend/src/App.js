import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from "./components/NavBar";

import './App.css';

import Home from "./pages/Homepage";
function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      </Routes>
      </BrowserRouter>
    </ChakraProvider>

=======
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
>>>>>>> 936c4b20bd5a9565e3db934d14abe96def8aa782
  );
}

export default App;
