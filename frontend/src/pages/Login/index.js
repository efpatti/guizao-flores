import React from "react";
import "./login.css";
import { Box } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
class Login extends React.Component {
  render() {
    return (
      <div className="containerPage">
        <Box boxShadow="2xl" p="12" rounded="md" bg="white">
          <div className="login-box">
            <h2 className="h2-tchobaz">Seja bem vindo novamente!</h2>
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
                bg="white"
                color="black"
                _hover={{ bg: "#405b18", color: "white" }}
              >
                Login
              </Button>
            </form>
          </div>
        </Box>
      </div>
    );
  }
}

export default Login;
