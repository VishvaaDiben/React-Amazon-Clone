import "./Checkout.css";

import CheckoutProduct from "./CheckoutProduct";
import React from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";

// import CurrencyFormat from "react-currency-format";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/PayCode/FinalAssets/Desktop/English/AmazonExports_FIAT_Concepts_R7_LP_DesktopHero_1500x300_v1.png"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping cart is empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket </h2>
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
