import {
  useColorMode,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  Card,
  Image,
  Text,
  Flex,
  Box,
  Grid,
} from "@chakra-ui/react";
import { Carousel } from "react-bootstrap";
import bannerOrquidea from "../../img/banner-orquidea.webp";
import bannerOutono from "../../img/banner-outono.webp";
import bannerPascoa from "../../img/banner-pascoa.webp";
import bannerabraco from "../../img/banner-abraco.webp";
import React from "react";
import "../Homepage/Homepage.css";
import { Container, Row, Col } from "react-bootstrap";
import apaixonado from "../../img/Apaixonados.png";
import florfofa from "../../img/flor-fofa-removebg-preview.png";
import florfofa2 from "../../img/flor-fofa2-removebg-preview.png";
import florfofa3 from "../../img/flor-fofa3-removebg-preview.png";
import { products } from "../Catalogo/dataStore";
import ProductCard from "../../components/ProductCard";
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
  const cardStyle = {
    width: "100%",
    height: "100%",
  };

  const produtosApaixonado = products.filter((product) =>
    product.category_item.some((category) => category.name === "Romântico")
  );
  const apaixonados = produtosApaixonado.slice(0, 4);
  const produtosAcessorios = products.filter((product) =>
    product.category_item.some((category) => category.name === "Acessórios")
  );
  const produtosData = products.filter((product) =>
    product.category_item.some((category) => category.name === "Home")
  );
  const { colorMode } = useColorMode();
  return (
    <section>
      <Flex justify="center" mt="7rem">
        <Carousel className="carousel-container">
          <Carousel.Item>
            <Image className="bannerfoto" src={bannerabraco} fluid />
          </Carousel.Item>
          <Carousel.Item>
            <Image className="bannerfoto" src={bannerOrquidea} fluid />
          </Carousel.Item>
          <Carousel.Item>
            <Image className="bannerfoto" src={bannerOutono} fluid />
          </Carousel.Item>
          <Carousel.Item>
            <Image className="bannerfoto" src={bannerPascoa} fluid />
          </Carousel.Item>
        </Carousel>
      </Flex>

      <h1 className="letreiro">Promoções de Março</h1>
      <Container className="mb-5 mt-5">
        <Row>
          {produtosData.map((product, index) => (
            <Col key={index}>
              <Card maxW="sm">
                <CardBody>
                  <Image src={product.img} />
                  <Stack mt="2    " spacing="0">
                    <Heading size="md">{product.name}</Heading>
                    <Text>{product.desc}</Text>
                    <Text className="texto-preco" fontSize="2xl">
                      R${product.price}
                    </Text>
                    <Text as="s" fontSize="2x1">
                      R${product.old_price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ProductCard
                    product={product}
                    buttonText="Adicionar ao Carrinho"
                  />
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
        <h1 className="letreiro1">Acessorios para sua planta</h1>
        <Row>
          {produtosAcessorios.map((product, index) => (
            <Col key={index}>
              <Card className="card2" maxW="sm">
                <CardBody>
                  <Image src={product.img} />
                  <Stack mt="1  " spacing="3">
                    <Heading size="md">{product.name}</Heading>
                    <Text>{product.desc}</Text>
                    <Text className="texto-preco" fontSize="2xl">
                      R${product.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ProductCard
                    product={product}
                    buttonText="Adicionar ao Carrinho"
                  />
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Image className="banner-amor mb-5" src={apaixonado} fluid />
      <Container mt="1rem" mb="1rem">
        <Row>
          {/* Mapeamento dos produtos */}
          {apaixonados.map((product, index) => (
            <Col key={index} style={{ marginBottom: "20px" }}>
              <Card maxW="sm" style={cardStyle}>
                <CardBody>
                  <Image src={product.img} />
                  <Stack mt="2" spacing="0">
                    <Heading size="md">{product.name}</Heading>
                    <Text>{product.desc}</Text>
                    <Text className="texto-preco" fontSize="2xl">
                      R${product.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ProductCard
                    product={product}
                    buttonText="Adicionar ao Carrinho"
                  />
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Flex justify="center" align="center" mt="3rem" mb="3rem">
        <Box boxShadow="2xl" rounded="md">
          <Text textAlign="center" fontSize="35">
            Dicas de cuidado
          </Text>
          <Stack direction="column" spacing="5px">
            <Box>
              <Stack direction="row" spacing="5px">
                <div
                  className={
                    colorMode === "light"
                      ? "linha-lado-1"
                      : "linha-lado-1s-dark"
                  }
                >
                  <Box className="boxi2" boxSize="xs">
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
                <div
                  className={
                    colorMode === "light" ? "linha-lado-2" : "linha-lado-2-dark"
                  }
                >
                  <Box className="boxi" boxSize="280px">
                    <Text fontSize="26">Use água limpa e fresca</Text>
                    <Text fontSize="md">
                      Troque a água do vaso regularmente, a cada dois dias, para
                      evitar a proliferação de bactérias.
                    </Text>
                  </Box>
                </div>
              </Stack>
            </Box>
            <Box>
              <Stack direction="row" spacing="5px">
                <div
                  className={
                    colorMode === "light"
                      ? "linha-lado-1"
                      : "linha-lado-1s-dark"
                  }
                >
                  <Box className="boxi2" boxSize="xs">
                    <Text fontSize="27">Lembre-se de trocar a água</Text>
                    <Text fontSize="md">
                      Para conservar flores é trocar a água do vaso
                      regularmente. A água deve ser trocada a cada dois dias ou
                      sempre que estiver turva.
                    </Text>
                  </Box>
                </div>
                <Box>
                  <Image className="fotinha2" boxSize="270px" src={florfofa3} />
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Flex>
      <br />
      <br />
      <br />
    </section>
  );
}

export default Home;
