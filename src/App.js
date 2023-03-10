import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList ';
import Cart from './components/Cart';
import './App.css';
import { useEffect, useState } from 'react';
import {data} from './data/data'

function App() {
  const [products, setProducts] = useState()
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    //MAKE YOUR API CALL HERE TO PROVIDE THE APPLICATION WITH THE PRODUCT LIST FROM THE PRODUCT LIST ENDPOINT
    //ON YOUR EXPRESS BACKEND
    const loadData = async () => {
      
      setProducts(data)
    }

    loadData();
  },[])

  const onAddToCart = (product) => {
   //MAKE AN API CALL TO POST A PRODUCT DATA TO THE ADD TO CART ENDPOINT
    console.log(product)
    const itemExists = cartItems.find(element => element.id === product.id);
    
    if(itemExists) return
    
    setCartItems(prevState => [...prevState, product])
    
  }

  const onRemoveFromCart = (id) => {
    //MAKE AN API CALL AND UPDATE THE STATE BASED ON THE RETRUNED ARRAY ELEMENTS
    //__________________________________________________________________________
    const updatedCart = cartItems.filter(cartItem => cartItem.id !== id);
    setCartItems(updatedCart);
    
  }

  return (
    <div className="App">
      
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<ProductList products={products} cartItems={cartItems} onAddToCart={onAddToCart} />}/>
          <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
