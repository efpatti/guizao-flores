import { Card, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { MdArrowCircleUp, MdArrowCircleDown } from "react-icons/md";

function ProductCard(props) {
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
    <Card>
      <Card.Body>
        <Card.Title className="title4">{product.title}</Card.Title>
        <Card.Text>{formatPrice(product.price)}</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column sm="6">
                {productQuantity}
              </Form.Label>
              <Col sm="6">
                <MdArrowCircleUp
                  className="arrow"
                  onClick={addOneToCart}
                ></MdArrowCircleUp>
                <MdArrowCircleDown
                  className="arrow"
                  onClick={removeOneFromCart}
                ></MdArrowCircleDown>
              </Col>
            </Form>
            <button onClick={deleteFromCart} className="custom-btn btn-card">
              Remover do Carrinho
            </button>
          </>
        ) : (
          <button className="custom-btn btn-card" onClick={addOneToCart}>
            Adicionar ao Carrinho
          </button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
