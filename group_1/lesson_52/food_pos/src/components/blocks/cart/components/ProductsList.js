import { ProductItem } from "./ProductItem";
import { useSelector } from "react-redux";

function ProductList(props) {
  const products = useSelector((state) => state.cart.products);

  const productsArr = Object.values(products);
  const filteredProducts = productsArr.filter(
    (product) => product.deliveryType === props.activeDeliveryType
  );

  return (
    <div className="CartProducts" style={{ flex: "1", overflow: "auto" }}>
      <table className="CartProducts__list">
        <thead>
          <tr>
            <th>Item</th>
            <th style={{ textAlign: "right", paddingRight: 30 }}>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {!filteredProducts.length ? (
            <div className="mt-3">Empty...</div>
          ) : null}
          {filteredProducts.map((product) => (
            <ProductItem data={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { ProductList };
