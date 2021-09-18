import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__leftContainer">
        <img
          className="checkout__ad"
          src="https://www.seoclerk.com/pics/trade2684-1KYOoJ1416509800.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout__rightContainer">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
