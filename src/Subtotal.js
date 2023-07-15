import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const Navigate = useNavigate();
  //eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();

  const subtotalValue = getBasketTotal(basket);

  // Format the subtotal value using Intl.NumberFormat
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):{" "}
        <strong>{formatter.format(subtotalValue)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button onClick={(e) => Navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;