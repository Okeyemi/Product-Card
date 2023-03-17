import React from "react";
// import Navbar from "./Navbar";

function Cart({ cartItems, onRemoveFromCart }) {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div>
      <h3>Cart Items({cartItems.length})</h3>
      </div>
      <div className="cart">
      {cartItems?.map((cartItem) => (
        <div className="cart" style={{ border: "1px solid #abc", margin: "3px", width: "300px", padding: "10px"}}>
          {/* <h4>{cartItem.image}</h4> */}
          <h4>{cartItem.name}</h4>
          <p>${cartItem.price.toFixed(2)}</p>
          <button className="addToCartBttn" onClick={() => onRemoveFromCart(cartItem.id)}>
            Remove From Cart
          </button>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Cart;
