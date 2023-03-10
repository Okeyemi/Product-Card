import React from "react";
import { Link } from "react-router-dom";

function Nav({ cartItemsCount }) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/cart">Cart ({cartItemsCount})</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
