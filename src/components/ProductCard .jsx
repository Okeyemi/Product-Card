import React from "react";

function ProductCard({ name, price, description, image, onAddToCart }) {
  const product = {
    name,
    price,
    description,
    image,
    onAddToCart,
  };
  return (
    <div style={{ border: "1px solid #abc", width: "auto" }}>
      <h3>{name}</h3>
      <img src={image} alt={image} />
      <p>{price.toFixed(2)}</p>
      <p>{description}</p>
      <button onClick={() => onAddToCart(product)}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
