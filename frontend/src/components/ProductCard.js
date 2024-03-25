import React, { useContext } from "react";
import {
  Button,
  Box,
  Text,
  Stack,
  Grid,
  useColorMode,
  Link,
  Flex,
} from "@chakra-ui/react";
import { MdShoppingCart, MdDelete } from "react-icons/md";
import { CartContext } from "../CartContext";

function ProductCard({ product }) {
  const { colorMode } = useColorMode();
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  const formatPrice = (price) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const addOneToCart = () => {
    cart.addOneToCart(product.id);
  };

  const removeOneFromCart = () => {
    cart.removeOneFromCart(product.id);
  };

  const deleteFromCart = () => {
    cart.deleteFromCart(product.id);
  };

  return (
    <Grid direction="row">
      {productQuantity > 0 ? (
        <>
          <Flex>
            <Grid direction="row" templateColumns="repeat(2, 1fr)">
              <Box>
                <Button
                  size="sm"
                  bg={colorMode === "light" ? "white" : ""}
                  variant="none"
                  border="1px"
                  borderColor="transparent"
                  _hover={{
                    opacity: "70%",
                    borderColor:
                      colorMode === "light" ? "#405B18" : "greenyellow",
                  }}
                  color={colorMode === "light" ? "#405B18" : "greenyellow"}
                >
                  <MdDelete />
                  <Text fontSize="xs">{productQuantity}</Text>
                </Button>
              </Box>
              <Box>
                <Grid>
                  <Box>
                    <Button onClick={addOneToCart} variant="ghost" size="xs">
                      +
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      onClick={removeOneFromCart}
                      variant="ghost"
                      size="xs"
                    >
                      -
                    </Button>
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Flex>
          <Link
            onClick={deleteFromCart}
            color={colorMode === "light" ? "#405B18" : "greenyellow"}
          >
            Remover
          </Link>
        </>
      ) : (
        <Button
          onClick={addOneToCart}
          _hover={{ opacity: "70%" }}
          size="sm"
          borderRadius="3xl"
          color={colorMode === "light" ? "whitesmoke" : "gray.800"}
          bg={colorMode === "light" ? "#405B18" : "greenyellow"}
        >
          <MdShoppingCart />
        </Button>
      )}
    </Grid>
  );
}

export default ProductCard;
