import React, { useContext, useState } from "react";
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
import { MdShoppingCart } from "react-icons/md";
import { CartContext } from "../CartContext";

function ProductCard({ product, buttonText }) {
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
          <div>
            <Stack direction="row" spacing="0.5rem">
              <Button
                onClick={addOneToCart}
                size="xs"
                _hover={{ opacity: "70%" }}
                borderRadius="full"
                bg={colorMode === "light" ? "#405B18" : "greenyellow"}
                color={colorMode === "light" ? "whitesmoke" : "gray.800"}
              >
                +
              </Button>
              <Text fontSize="md">{productQuantity}</Text>
              <Button
                onClick={removeOneFromCart}
                isRound={true}
                size="xs"
                borderRadius="full"
                _hover={{ opacity: "70%" }}
                bg={colorMode === "light" ? "#405B18" : "greenyellow"}
                color={colorMode === "light" ? "whitesmoke" : "gray.800"}
              >
                -
              </Button>
            </Stack>
          </div>
        </>
      ) : (
        <Button
          onClick={addOneToCart}
          _hover={{ opacity: "70%" }}
          size="sm"
          borderRadius="full"
          color={colorMode === "light" ? "whitesmoke" : "gray.800"}
          bg={colorMode === "light" ? "#405B18" : "greenyellow"}
          fontSize="xs"
          textTransform="uppercase"
        >
          <Flex align="center" justifyContent="center">
            <Box pl="1.5rem">{buttonText}</Box>
            <Box pr="1.5rem">
              <MdShoppingCart />
            </Box>
          </Flex>
        </Button>
      )}
    </Grid>
  );
}

export default ProductCard;
