import React from "react";
import ProductCard from "./ProductCard ";
// import Navbar from "./Navbar";

function ProductList({ products, onAddToCart, cartItems }) {
  return (
    <div>
      {/* <Navbar cartItemsCount={cartItems.length} /> */}
      <h2 className="shop">Product List</h2>
      <div className="products">
      {products?.map((product) => (
        <ProductCard 
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
       </div>
    </div>
  );
}

export default ProductList;
