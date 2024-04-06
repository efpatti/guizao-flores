import React from "react";
import "./login.css";
import { Box } from "@chakra-ui/react";
import { Button, ButtonGroup, Text, useColorMode } from "@chakra-ui/react";
function Login() {
  const { colorMode } = useColorMode();
  return (
    <div className="containerPage">
      <Box boxShadow="2xl" p="12" rounded="md">
        <Box
          className="login-box"
          boxShadow="2xl"
          filter="auto"
          brightness="90%"
        >
          <Text fontSize="xl">Seja bem vindo novamente!</Text>
          <form>
            <input
              className="biene"
              type="text"
              placeholder="Usuário"
              required
            />
            <input
              className="biene"
              type="password"
              placeholder="Senha"
              required
            />

            <Button
              border="1px"
              borderColor={colorMode === "light" ? "#405b18" : "greenyellow"}
              color={colorMode === "light" ? "#405b18" : "greenyellow"}
              _hover={{
                bg: colorMode === "light" ? "#405b18" : "greenyellow",
                color: colorMode === "light" ? "black" : "white",
                border: colorMode === "light" ? "black" : "white",
                opacity: "90%",
              }}
              variant="transparent"
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default Login;
