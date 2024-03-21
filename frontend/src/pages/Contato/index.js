import React from "react";
import "./Contato.css";
import { Container, Form, Image, Row, Col } from "react-bootstrap";
import { Input, Textarea, Button } from "@chakra-ui/react";
import Arrow from "../../img/arrow-right.svg";
import ImgRight from "../../img/Pegue a flor.png";
import Phone from "../../img/telephone.svg";
import map from "../../img/geo-alt.svg";
import Email from "../../img/envelope.svg";
function Contato() {
  return (
    <>
      <div className="body">
        <Container className="contact-container">
          <Form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-left"
          >
            <div className="contact-left-title">
              <h2>Cadastre-se</h2>
              <hr />
            </div>
            <input
              type="hidden"
              name="access_key"
              value="bbcff95f-4350-474d-99b7-469ce95ebcafE"
            ></input>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact-inputs"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact-inputs"
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              className="contact-inputs"
              required
            ></Textarea>
            <Button type="submit">
              {" "}
              submit <Image src={Arrow} />{" "}
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
    </>
  );
}

export default Contato;
