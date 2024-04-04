import React, { createContext, useState } from "react";
import { getProductData } from "./pages/Catalogo/dataStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  updateCart: () => {},
  getTotalCost: () => {},
  getProductData: () => {}, // Include getProductData in the default context
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const getProductQuantity = (id) => {
    const product = cartProducts.find((product) => product.id === id);
    return product ? product.quantity : 0;
  };

  const addOneToCart = (id) => {
    const quantity = getProductQuantity(id);
    const updatedProducts =
      quantity === 0
        ? [...cartProducts, { id, quantity: 1 }]
        : cartProducts.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          );
    setCartProducts(updatedProducts);
  };

  const removeOneFromCart = (id) => {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      const updatedProducts = cartProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      setCartProducts(updatedProducts);
    }
  };

  const updateCart = (id, newQuantity) => {
    const updatedProducts = cartProducts.map((product) =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    );
    setCartProducts(updatedProducts);
  };

  const deleteFromCart = (id) => {
    const updatedProducts = cartProducts.filter((product) => product.id !== id);
    setCartProducts(updatedProducts);
  };

  const getTotalCost = () => {
    return cartProducts.reduce((totalCost, cartItem) => {
      const productData = getProductData(cartItem.id);
      return totalCost + productData.price * cartItem.quantity;
    }, 0);
  };

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    updateCart,
    getTotalCost,
    getProductData, // Include getProductData in the context value
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
