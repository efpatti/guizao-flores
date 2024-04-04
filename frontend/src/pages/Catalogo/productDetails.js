import { useParams } from "react-router-dom";
import { getProductData } from "./dataStore";
import {
  Flex,
  Text,
  Grid,
  Box,
  useColorMode,
  Button,
  GridItem,
} from "@chakra-ui/react";
import { RiStarSFill } from "react-icons/ri";
import ProductCard from "../../components/ProductCard";
export const formatPrice = (price) => {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
function ProductDetails() {
  const { colorMode } = useColorMode();
  const { productId } = useParams();
  const product = getProductData(parseInt(productId));
  let randomNumber = Math.floor(Math.random() * 20) + 1;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <Box key={i} mr={1}>
        <RiStarSFill color={colorMode === "light" ? "#ffd700" : "#ffd700"} />
      </Box>
    );
  }

  return (
    <Grid minHeight="100vh">
      <Flex
        justify="center"
        align="center"
        bg={colorMode === "light" ? "gray.100" : "gray.900"}
      >
        {product && (
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1.5fr" }}
            gap={8}
            p={4}
            borderRadius="lg"
            bg={colorMode === "light" ? "white" : "#1A202C"}
            boxShadow="md"
          >
            <GridItem>
              <Flex justify="center">
                <img src={product.img} alt={product.name} />
              </Flex>
            </GridItem>
            <GridItem>
              <Flex direction="column" justify="space-between" h="100%" p={4}>
                <Box>
                  <Text fontSize="lg" fontWeight="400" mb={2}>
                    {product.name}
                  </Text>
                  <Flex align="center">
                    <Text
                      decoration="line-through"
                      fontSize="xs"
                      color="gray.500"
                      mr={2}
                    >
                      {formatPrice(product.old_price)}
                    </Text>
                    <Text fontSize="lg" fontWeight="400">
                      {formatPrice(product.price)}
                    </Text>
                    <Text ml={2} fontSize="xs">
                      3x de {formatPrice(product.price / 3)} sem juros
                    </Text>
                  </Flex>
                  <Flex align="center" mt={2}>
                    {stars}
                    <Text fontSize="sm" ml={1}>
                      ({randomNumber})
                    </Text>
                  </Flex>
                </Box>
                <Flex justify="center">
                  <ProductCard
                    product={product}
                    buttonText="Adicionar ao carrinho"
                  />
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        )}
      </Flex>
    </Grid>
  );
}

export default ProductDetails;
