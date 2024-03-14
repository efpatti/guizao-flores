<<<<<<< HEAD
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
=======
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/NavBar"
import './App.css';
function App() {
  return (
    <ChakraProvider>
      <NavBar />
    </ChakraProvider>
>>>>>>> fc97df56dfd8ffa673ae2347bdc085b21fab4a03
  );
}

export default App;
