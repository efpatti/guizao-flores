import { useParams } from "react-router-dom";
import { products } from "./dataStore";
function ProductDetails() {
  const { productId } = useParams();

  const product = products.find((p) => p.id === productId);

  return (
    <>
      <h1>Product Details</h1>
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Old Price: ${product.old_price}</p>
          <img src={product.img} alt={product.name} />
        </div>
      )}
    </>
  );
}

export default ProductDetails;
