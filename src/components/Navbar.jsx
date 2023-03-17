import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";


function Navbar({ cartItemsCount, cartItems }) {
  // cartItemsCount={cartItems.length}
  return (
    <div className="navbar">
      <div className="links">
        <div className="">
        <h3 style={{ color: 'red', fontSize: '20px', fontWeight: 'bold', textAlign: 'left' }} >HandiWoker Shop</h3>
        </div>
          <Link to="/cart"> <ShoppingCart size={30} /> </Link>
          <Link  style={{fontSize: '20px'}} to="/">Shop</Link>
          </div>
    </div>
  );
};

export default Navbar;
