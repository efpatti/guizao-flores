import FotoUm from "../../img/snum.jpg";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import { Box, useColorMode } from "@chakra-ui/react";
import "./AboutUs.css";
import FotoDois from "../../img/sndois.jpg";
import FotoTres from "../../img/Entregamos para todo Brasil.png";
import FotoTresDarkMode from "../../img/entregadarkmode.png";
import VideoDaTropa from "../../videos/Guizäo Flores é.mp4";
import LogoUm from "../../img/Design sem nome.png";
import LogoDois from "../../img/Design sem nome (1).png";
import LogoTres from "../../img/Design sem nome (2).png";
import LogoQuatro from "../../img/Design sem nome (3).png";
import LogoCinco from "../../img/Design sem nome (4).png";
import LogoSeis from "../../img/Design sem nome (5).png";
function SobreNos() {
  const { colorMode } = useColorMode();
  return (
    <Box mt="6rem">
      <Container>
        <Row>
          <Col className="text-center mt-5">
            <h1 className="titulo">Sobre nós</h1>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col>
            <Image style={{ width: "500px" }} src={FotoUm} />
          </Col>
          <Col
            className={colorMode === "light" ? "boxtextone" : "boxtextonedark"}
          >
            <h1 className="titulobox gradient">Quem é a Guizäo flores?</h1>
            <div className="mt-4 mb-5 textoum">
              <p>
                A Guizäo Flores é uma loja online que se destaca no mercado pela
                sua vasta seleção de flores e arranjos exclusivos. Fundada com a
                paixão por oferecer momentos especiais e memoráveis, a Guizäo
                Flores não só fornece uma ampla variedade de opções florais, mas
                também se compromete com a qualidade e a excelência no
                atendimento ao cliente. Com uma equipe dedicada e experiente, a
                loja busca constantemente inovar e surpreender seus clientes,
                tornando cada compra uma experiência única e gratificante.
                <br />
                <br />
                Além de oferecer produtos de alta qualidade, a Guizäo Flores se
                destaca por sua praticidade e conveniência, permitindo que os
                clientes encomendem flores e presentes especiais com apenas
                alguns cliques, no conforto de suas casas. Com uma plataforma
                online intuitiva e segura, a loja garante uma experiência de
                compra sem complicações, com entrega rápida e eficiente em todo
                o país.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col
            className={colorMode === "light" ? "boxtextone" : "boxtextonedark"}
          >
            <h1 className="titulobox gradientdois">
              Como surgiu a Guizäo flores?
            </h1>
            <div className="mt-4 textoum">
              <p>
                A Guizäo Flores teve sua origem na paixão de seu fundador pela
                natureza e pelo desejo de compartilhar momentos especiais
                através de flores. Tudo começou quando Guizäo, um amante das
                plantas, percebeu a falta de opções acessíveis e de qualidade no
                mercado de arranjos florais. Inspirado em criar uma solução para
                esse problema, decidiu fundar sua própria loja online,
                oferecendo uma ampla variedade de flores frescas e arranjos
                exclusivos para clientes de todo o país.
                <br />
                <br />
                Com determinação e dedicação, Guizäo trabalhou incansavelmente
                para construir sua loja, buscando sempre inovar e proporcionar
                uma experiência excepcional aos seus clientes. O sucesso da
                Guizäo Flores é resultado do compromisso com a qualidade, da
                atenção aos detalhes e do amor pela arte floral, que permeiam
                cada aspecto do negócio desde o seu início modesto até se tornar
                uma referência no mercado de flores online.
              </p>
            </div>
          </Col>
          <Col className=" mt-3">
            <Image
              className="imgdois"
              style={{ width: "500px" }}
              src={FotoDois}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-5">
        <Row>
          <Col>
            {" "}
            <Image
              style={{}}
              src={colorMode === "light" ? FotoTres : FotoTresDarkMode}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="titulo mt-5">Patrocinadores</h1>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-5 ">
        <Row className="text-center">
          <Col xs={6} md={2} className="">
            <Image
              className="margin"
              src={LogoUm}
              style={{ width: "150px", border: "solid beige 2px" }}
              roundedCircle
            />
          </Col>
          <Col xs={6} md={2}>
            <Image
              src={LogoDois}
              style={{ width: "150px", border: "solid beige 2px" }}
              roundedCircle
            />
          </Col>
          <Col xs={6} md={2}>
            <Image src={LogoTres} style={{ width: "150px" }} roundedCircle />
          </Col>
          <Col xs={6} md={2}>
            <Image src={LogoQuatro} style={{ width: "150px" }} roundedCircle />
          </Col>
          <Col xs={6} md={2}>
            <Image src={LogoCinco} style={{ width: "150px" }} roundedCircle />
          </Col>
          <Col xs={6} md={2}>
            <Image
              src={LogoSeis}
              style={{ width: "150px", border: "solid beige 2px" }}
              roundedCircle
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="cutetext mt-5">
            <div className="video-banner">
              <video autoPlay loop muted>
                <source src={VideoDaTropa} type="video/mp4" />
              </video>
            </div>{" "}
          </Col>
        </Row>
      </Container>
    </Box>
  );
}
export default SobreNos;
