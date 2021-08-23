import CheckIcon from "../../../../static/images/payments/Icon-Fill-checkmark-circle.svg";
import CreditIcon from "../../../../static/images/payments/Icon-Line-Card.svg";
import PaypalIcon from "../../../../static/images/payments/Icon-Line-Paypal.svg";
import WalletIcon from "../../../../static/images/payments/Icon-Line-Iconly-Light outline-Wallet.svg";

function PaymentMethodsSelect() {
  return (
    <div className="PaymentMethodsSelect">
      <label className="PaymentMethodsSelect__item PaymentMethodsSelect__item_active">
        <input type="radio" name="payment-method" value="credit-card" hidden />
        <img src={CreditIcon} alt="" />
        <span>Credit Card</span>
        <img
          className="PaymentMethodsSelect__item__check"
          alt=""
          src={CheckIcon}
        />
      </label>
      <label className="PaymentMethodsSelect__item">
        <input type="radio" name="payment-method" value="paypal" hidden />
        <img src={PaypalIcon} alt="" />
        <span>Paypal</span>
        <img
          className="PaymentMethodsSelect__item__check"
          alt=""
          src={CheckIcon}
        />
      </label>
      <label className="PaymentMethodsSelect__item">
        <input type="radio" name="payment-method" value="cash" hidden />
        <img src={WalletIcon} alt="" />
        <span>Cash</span>
        <img
          className="PaymentMethodsSelect__item__check"
          alt=""
          src={CheckIcon}
        />
      </label>
    </div>
  );
}

export { PaymentMethodsSelect };
