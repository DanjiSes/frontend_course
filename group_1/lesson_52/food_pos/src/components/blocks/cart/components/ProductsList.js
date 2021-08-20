import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";

function ProductList() {
  const products = useSelector((state) => state.cart.products);

  console.log(products);

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
          {!Object.values(products).length ? (
            <div className="mt-3">Empty...</div>
          ) : null}
          {Object.values(products).map((product) => (
            <ProductItem data={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { ProductList };
