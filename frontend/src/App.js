import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./components/NavBar"
import './App.css';
function App() {
  return (
    <ChakraProvider>
      <NavBar />
    </ChakraProvider>
  );
}

export default App;
