import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
function App() {
  return (
    <ChakraProvider>
      <h1>App</h1>
    </ChakraProvider>
  );
}

export default App;
