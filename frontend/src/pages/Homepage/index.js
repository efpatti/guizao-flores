import {
  useColorMode,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  Card,
  ButtonGroup,
  Image,
  Text,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import fototeste from "../../img/mega-buque-com-girassois-e-rosas-brancas.webp";
import bannerOrquidea from "../../img/banner-orquidea.webp";
import bannerOutono from "../../img/banner-outono.webp";
import bannerPascoa from "../../img/banner-pascoa.webp";
import bannerabraco from "../../img/banner-abraco.webp";
import promo2 from "../../img/buque-presente-gerberas-vermelhas.webp";
import promo33 from "../../img/buque-de-gypsophila-encantada-azul-claro.webp";
import promo3 from "../../img/flores-secas-roxas.webp";
import acessorio from "../../img/regador-fofo.jpg";
import acessorio2 from "../../img/image-removebg-preview (2).png";
import acessorio3 from "../../img/elefantezur.webp";
import { React, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Homepage/Homepage.css";
import { Container, Row, Col } from "react-bootstrap";
import fototeste2 from "../../img/snum.jpg";
import fototeste1 from "../../img/sndois.jpg";
import apaixonado from "../../img/Apaixonados.png";
import florfofa from "../../img/flor-fofa-removebg-preview.png";
import florfofa2 from "../../img/flor-fofa2-removebg-preview.png";
import florfofa3 from "../../img/flor-fofa3-removebg-preview.png";
const buttonStyle = {
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "purple.500",
      color: "purple.500",
    },
    solid: {
      bg: "purple.500",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};

function Home() {
  const cardData = [
    {
      nome: "Mega Buquê de Girassóis",
      Imagem: fototeste,
      Preco: "639,00 R$",
      Odpreco: "720,00 R$",
      Descricao: " Os girassóis são como pequenos artistas do sol, Suas flores gigantes e brilhantes parecem sorrir para o mundo",
    },
    {
      nome: "Buquê Presente Gérberas Vermelhas",
      Imagem: promo2,
      Preco: "87,90 R$",
      Odpreco: "125,00 R$",
      Descricao: " é como um jardim de paixão em suas mãos. Cada flor transmite um amor intenso e caloroso.",
    },
    {
      nome: "Buquê Poesia de Flores Secas Roxas",
      Imagem: promo3,
      Preco: "89,90 R$",
      Odpreco: "129,00 R$",
      Descricao: "é como um pedaço do céu noturno. Cada flor seca preserva a beleza efêmera da natureza.",
    },
    {
      nome: "Buquê de Gypsophila Encantada Azul Claro",
      Imagem: promo33,
      Preco: "165,00 R$",
      Odpreco: "195,90 R$",
      Descricao: " é como um sonho delicado tornado realidade. Cada pequena flor parece uma estrela celestial. ",
    },
  ];
  const cardApaixonado = [
    {
      nome2: "buque de fro",
      Imagem2: fototeste2,
      Preco2: "50,00 R$",
      Descricao2: "descriçao do buque de fro",
    },
    {
      nome2: "buque de fro",
      Imagem2: fototeste2,
      Preco2: "50,00 R$",
      Descricao2: "descriçao do buque de fro",
    },
    {
      nome2: "buque de fro",
      Imagem2: fototeste2,
      Preco2: "50,00 R$",
      Descricao2: "descriçao do buque de fro",
    },
    {
      nome2: "buque de fro",
      Imagem2: fototeste2,
      Preco2: "50,00 R$",
      Descricao2: "descriçao do buque de fro",
    },
  ];
  const cardAcessorio = [
    {
      nome1: "Vaso Cerâmica Azul e Preto",
      Imagem1: acessorio,
      Preco1: "89,90 R$",
      Descricao1: " Com um design clássico e elegante, o vaso possui um tom de azul profundo e escuro." ,
    },
    {
      nome1: "Vaso de flor transparente",
      Imagem1: acessorio2,
      Preco1: "47,90 R$",
      Descricao1: "Imagine um vaso de flor, feito de vidro delicado que brilha suavemente à luz do sol.",
    },
    {
      nome1: "Regador de Tropicana  ",
      Imagem1: acessorio3,
      Preco1: "19,99 R$",
      Descricao1: "regador encantador em forma de pássaro, feito de metal e pintado em cores vibrantes. ",
    },
  ];
  const { colorMode } = useColorMode();
  return (
    <section>
      <Carousel className="carrosel">
        <Carousel.Item>
          <img className="bannerfoto" src={bannerabraco} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="bannerfoto" src={bannerOrquidea} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="bannerfoto" src={bannerOutono} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="bannerfoto" src={bannerPascoa} />
        </Carousel.Item>
      </Carousel>

      <h1 className="letreiro">Promoções de Março</h1>
      <Container>
        <Row>
          {cardData.map((card, index) => (
            <Col key={index}>
              <Card maxW="sm">
                <CardBody>
                  <Image src={card.Imagem} />
                  <Stack mt="2    " spacing="0">
                    <Heading size="md">{card.nome}</Heading>
                    <Text>{card.Descricao}</Text>
                    <Text className="texto-preco" fontSize="2xl">
                      {card.Preco}
                    </Text>
                    <Text as='s' fontSize="2x1">{card.Odpreco}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    {colorMode === "light" ? (
                      <Button
                        bg="black"
                        color="white"
                        _hover={{ bg: "white", color: "black" }}
                      >
                        Comprar
                      </Button>
                    ) : (
                      <Button
                        bg="white"
                        color="black"
                        _hover={{ bg: "black", color: "white" }}
                      >
                        Comprar
                      </Button>
                    )}
                    {colorMode === "light" ? (
                      <Button
                        bg="black"
                        color="white"
                        _hover={{ bg: "white", color: "black" }}
                      >
                        Adicionar
                      </Button>
                    ) : (
                      <Button
                        bg="white"
                        color="black"
                        _hover={{ bg: "black", color: "white" }}
                      >
                        Adicionar
                      </Button>
                    )}
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>

        <h1 className="letreiro1">Acessorios para sua planta</h1>
        <Row>
          {cardAcessorio.map((card, index) => (
            <Col key={index}>
              <Card className="card2" maxW="sm">
                <CardBody>
                <Image src={card.Imagem1} />
                  <Stack mt="1  " spacing="3">
                    <Heading size="md">{card.nome1}</Heading>
                    <Text>{card.Descricao1}</Text>
                    <Text className="texto-preco" fontSize="2xl">
                      {card.Preco1}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    {colorMode === "light" ? (
                      <Button
                        bg="black"
                        color="white"
                        _hover={{ bg: "white", color: "black" }}
                      >
                        Comprar
                      </Button>
                    ) : (
                      <Button
                        bg="white"
                        color="black"
                        _hover={{ bg: "black", color: "white" }}
                      >
                        Comprar
                      </Button>
                    )}
                    {colorMode === "light" ? (
                      <Button
                        bg="black"
                        color="white"
                        _hover={{ bg: "white", color: "black" }}
                      >
                        Adicionar
                      </Button>
                    ) : (
                      <Button
                        bg="white"
                        color="black"
                        _hover={{ bg: "black", color: "white" }}
                      >
                        Adicionar
                      </Button>
                    )}
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <br />
      <br />
      <div>
        <Image fluid className="banner-amor" src={apaixonado} />
      </div>
      <Container>
        <br />
        <br />
        <Row>
          {cardApaixonado.map((card, index) => (
            <Col key={index}>
              <Card className="card3" maxW="sm">
                <CardBody>
                  <Image src={card.Imagem2} />
                  <Stack mt="1  " spacing="3">
                    <Heading size="md">{card.nome2}</Heading>
                    <Text>{card.Descricao2}</Text>
                    <Text className="texto-preco" fontSize="2xl">
                      {card.Preco2}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    {colorMode === "light" ? (
                      <Button
                        bg="black"
                        color="white"
                        _hover={{ bg: "white", color: "black" }}
                      >
                        Comprar
                      </Button>
                    ) : (
                      <Button
                        bg="white"
                        color="black"
                        _hover={{ bg: "black", color: "white" }}
                      >
                        Comprar
                      </Button>
                    )}
                    {colorMode === "light" ? (
                      <Button
                        bg="black"
                        color="white"
                        _hover={{ bg: "white", color: "black" }}
                      >
                        Adicionar
                      </Button>
                    ) : (
                      <Button
                        bg="white"
                        color="black"
                        _hover={{ bg: "black", color: "white" }}
                      >
                        Adicionar
                      </Button>
                    )}
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Flex justify="center" align="center" mt="3rem">
        <Box boxShadow="2xl" rounded="md">
          <Text textAlign="center" fontSize="35">
            Dicas de cuidado
          </Text>
          <Stack direction="column" spacing="5px">
            <Box>
              <Stack direction="row" spacing="5px">
                <div className={colorMode === "light" ? "linha-lado-1" : "linha-lado-1s-dark"} >
                <Box className="boxi2" boxSize="xs"  >
                  <Text fontSize="27">Corte os caules</Text>
                  <Text fontSize="md">
                    Ao receber flores, corte cerca de 2 a 5 centímetros dos
                    caules em um ângulo de 45 graus. Isso ajuda na absorção de
                    água.
                  </Text>
                </Box>
                </div>
                <Box>
                  <Image className="fotinha2" boxSize="270px" src={florfofa} />
                </Box>
              </Stack>
            </Box>
            <Box>
              <Stack direction="row" spacing="5px">
                <Box>
                  <Image className="fotinha" boxSize="250px" src={florfofa2} />
                </Box>
                <div className={colorMode === "light" ? "linha-lado-2" : "linha-lado-2-dark"} >
                <Box className="boxi" boxSize="280px" >
                  <Text fontSize="26">Use água limpa e fresca</Text>
                  <Text fontSize="md">
                    Troque a água do vaso regularmente, a cada dois dias, para
                    evitar a proliferação de bactérias.
                  </Text>
                </Box>
                </div>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </section>
  );
}

export default Home;
