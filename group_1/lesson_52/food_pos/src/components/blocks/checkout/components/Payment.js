import { PaymentMethodsSelect } from "./PaymentMethodsSelect";

function Payment() {
  return (
    <div className="Payment">
      <div
        className="pb-3 mb-3"
        style={{ borderBottom: "1px solid #393C49", marginTop: 42 }}
      >
        <h3 className="h1 mb-2 mt-2">Payment</h3>
        <span className="text-gray">3 payment method available</span>
      </div>

      <form>
        <h3 className="h2 mt-0">Payment Method</h3>

        <PaymentMethodsSelect onChange={console.log} />
      </form>
    </div>
  );
}

export { Payment };
