import React from "react";
import "./Contato.css";
import { Container, Form, Image, Button } from "react-bootstrap";
import { Input, Textarea } from "@chakra-ui/react";
import Arrow from "../../img/arrow-right.svg";
import ImgRight from "../../img/guizao-flores.png";
function Contato() {
  return (
    <>
      <div className="body">
        <Container className="contact-container">
          <Form action="" className="contact-left">
            <div className="contact-left-title">
              <h2>Get in touch</h2>
              <hr />
            </div>
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
            <Image src={ImgRight} />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Contato;
