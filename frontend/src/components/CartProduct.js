import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { Text, Link, useColorMode } from "@chakra-ui/react";

const formatPrice = (price) => {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

function CartProduct({ id, quantity }) {
  const cart = useContext(CartContext);
  const productData = cart.getProductData(id);
  const totalPrice = quantity * productData.price;
  const formattedTotalPrice = formatPrice(totalPrice);
  const { colorMode } = useColorMode();

  return (
    <>
      <Text fontSize="md">{productData.name}</Text>
      <Text fontSize="xs">{quantity} total</Text>
      <Text fontSize="sm">{formattedTotalPrice}</Text>
      <Link
        onClick={() => cart.deleteFromCart(id)}
        color={colorMode === "light" ? "#405B18" : "greenyellow"}
      >
        Remover
      </Link>
      <hr></hr>
    </>
  );
}

export default CartProduct;
