import React from "react";
import "./Contato.css";
import { Container, Form, Image, Row, Col } from "react-bootstrap";
import {
  Input,
  Textarea,
  Button,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import Arrow from "../../img/arrow-right.svg";
import ImgRight from "../../img/Pegue a flor.png";
import Phone from "../../img/telephone.svg";
import map from "../../img/geo-alt.svg";
import Email from "../../img/envelope.svg";
import { Box } from "@chakra-ui/react";
function Contato() {
  const { colorMode } = useColorMode();
  const toast = useToast();
  return (
    <Box mt="8.5rem">
      <div className="body">
        <Container className="contact-container">
          <Form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-left"
          >
            <div className="contact-left-title">
              <h2>Contate-nos</h2>
              <hr
                className={
                  colorMode === "light"
                    ? "contact-left-title-hr"
                    : "contact-left-title-hr-dark"
                }
              />
            </div>
            <input type="hidden" name="access_key"></input>
            <Input
              type="text"
              name="name"
              placeholder="Nome"
              className="contact-inputs"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="contact-inputs"
              required
            />
            <Textarea
              name="message"
              placeholder="Escreva sua mensagem aqui"
              className="contact-inputs"
              required
            ></Textarea>
            <Button
              onClick={() =>
                toast({
                  title: "Mensagem enviada!",
                  description: "Sua mensagem foi enviada com sucesso.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                })
              }
            >
              Mandar mensagem
            </Button>
          </Form>

          <div className="contact-right">
            <Image className="br" style={{ width: "350px" }} src={ImgRight} />
            <div className="overlay">
              <Container className="mt-5">
                <Row>
                  <Col className="mt-5" md={2}>
                    <Image
                      className="tele"
                      style={{ width: "25px" }}
                      src={Phone}
                    />
                  </Col>
                  <Col className="mt-5" md={10}>
                    <p className="textooverlay">(11) 4002-8922</p>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col md={2}>
                    <Image style={{ width: "25px" }} src={map} />
                  </Col>
                  <Col md={10}>
                    <p className="textooverlay">
                      Rua Roma 54, São Caetano do Sul
                    </p>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col md={2}>
                    <Image style={{ width: "25px" }} src={Email} />
                  </Col>
                  <Col md={10}>
                    <p className="textooverlay">guizaoflores@gmail.com</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </Box>
  );
}

export default Contato;
