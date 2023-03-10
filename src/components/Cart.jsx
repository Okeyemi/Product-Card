import React from "react";
import Nav from "./Nav";

function Cart({ cartItems, onRemoveFromCart }) {
  return (
    <div>
      <Nav />
      <h3>Cart({cartItems.length})</h3>
      {cartItems?.map((cartItem) => (
        <div style={{ border: "1px solid #abc", margin: "5px", width: "auto" }}>
          <h4>{cartItem.name}</h4>
          <p>{cartItem.price.toFixed(2)}</p>
          <button onClick={() => onRemoveFromCart(cartItem.id)}>
            Remove From Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
