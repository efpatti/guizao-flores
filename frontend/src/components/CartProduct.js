import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  const formatPrice = (price) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const totalPrice = quantity * productData.price;
  const formattedTotalPrice = formatPrice(totalPrice);

  return (
    <>
      <h3 className="title4">{productData.title}</h3>
      <p className="title4">{quantity} total</p>
      <p className="title4">{formattedTotalPrice}</p>
      <a href="#1" className="links" onClick={() => cart.deleteFromCart(id)}>
        Remover
      </a>
      <hr></hr>
    </>
  );
}

export default CartProduct;
