import "./Checkout.scss";

import { Confirmation } from "./components/Confirmation";
import { Payment } from "./components/Payment";

function Checkout() {
  return (
    <div className="Checkout">
      <Confirmation />
      <Payment />
    </div>
  );
}

export { Checkout };
