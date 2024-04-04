import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
<<<<<<< HEAD
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
=======
import "bootstrap/dist/css/bootstrap.min.css";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
>>>>>>> 79ec174d004d19ab28d3911460be45cdf276ab24

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    <Col>
      <Row></Row>
    </Col>
  </React.StrictMode>
);
