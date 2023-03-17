import React from "react";

function ProductCard({ name, price, description, image, onAddToCart, cartItems}) {
  const product = {
    
    name,
    price,
    description,
    image,
    onAddToCart,
  };
  // const cartItemsCount=cartItems[product]
  return (
    <div className="product"style={{ border: "1px solid #abc", width: "280px" }}>
       <img src='https://placehold.co/100' alt={image} />
       <p>{product.image}</p>
      <div className="description">
      <p>
        <b>{name}</b>
        </p>
      <p>$ {price.toFixed(2)}</p>
      <p>{description}</p>
      </div>
      <button className="addToCartBttn" onClick={() => onAddToCart(product)}> Add to cart 
     
      </button>
    </div>
  );
}
// {cartItemsCount > 0 && <> ({cartItemsCount})</>}
export default ProductCard;
