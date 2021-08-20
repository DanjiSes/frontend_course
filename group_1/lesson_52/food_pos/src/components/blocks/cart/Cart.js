import { useState } from "react";
import { Button } from "../../ui/button/Button";
import { Input } from "../../ui/input/Input";
import "./Cart.scss";
import { ProductList } from "./components/ProductsList";

const btns = ["Dine In", "To Go", "Delivery"];

function Cart() {
  const [active, setActive] = useState(0);

  return (
    <div class="Cart">
      <h2 className="h2">Orders #34562</h2>

      <div>
        {btns.map((label, idx) => (
          <Button
            onClick={() => setActive(idx)}
            label={label}
            key={idx}
            color="primary"
            theme={idx === active ? "default" : "outline"}
            className="mr-2"
          />
        ))}
      </div>

      <ProductList />

      <div style={{ padding: "30px 0" }}>
        <Button label="Continue to payment" />
      </div>
    </div>
  );
}

export { Cart };
