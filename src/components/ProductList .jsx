import React from "react";
import ProductCard from "./ProductCard ";
import Nav from "./Nav";

function ProductList({ products, onAddToCart, cartItems }) {
  return (
    <div>
      <Nav cartItemsCount={cartItems.length} />
      <h2>Product List</h2>
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
  );
}

export default ProductList;
