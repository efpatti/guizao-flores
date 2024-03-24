import { Button, Box, useColorMode, Text, Stack, Grid } from "@chakra-ui/react";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import {
  MdArrowCircleUp,
  MdArrowCircleDown,
  MdShoppingCart,
} from "react-icons/md";

function ProductCard(props) {
  const colorMode = useColorMode();
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  // Função para formatar o preço com vírgula
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
    <Grid>
      {productQuantity > 0 ? (
        <>
          <Box>
            <Text>{productQuantity}</Text>
          </Box>
          <Box>
            <Stack direction="row">
              <MdArrowCircleUp
                className="arrow"
                onClick={addOneToCart}
              ></MdArrowCircleUp>
              <MdArrowCircleDown
                className="arrow"
                onClick={removeOneFromCart}
              ></MdArrowCircleDown>
            </Stack>
          </Box>
          <Button onClick={deleteFromCart} variant="ghost">
            Remover do Carrinho
          </Button>
        </>
      ) : (
        <Button
          onClick={addOneToCart}
          variant="ghost"
          color={colorMode === "light" ? "gray.900" : "gray.600"}
        >
          <MdShoppingCart />
        </Button>
      )}
    </Grid>
  );
}

export default ProductCard;
