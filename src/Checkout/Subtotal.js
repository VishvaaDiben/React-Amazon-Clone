import "./Subtotal.css";

import CurrencyFormat from "react-currency-format";
import React from "react";
import { getBasketCount } from "../reducer";
import { useStateValue } from "../StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{` ${value} `}</strong>
            </p>
            <small className="subTotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketCount(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
