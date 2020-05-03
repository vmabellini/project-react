import React, { useState, useContext } from "react";
import { AppContext } from "../components/AppContext";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, total, clearCart } = useContext(AppContext);
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    if (cartItems.length === 0) {
      console.log("Cart empty!");
      return;
    }
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Place Order");
      clearCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {total()}</p>
      <div className="order-button">
        <button onClick={() => placeOrder()}>{buttonText}</button>
      </div>
    </main>
  );
}

export default Cart;
