import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList ';
import Cart from './components/Cart';
import './App.css';
import { useEffect, useState } from 'react';
// import {data} from './data/data';
import Navbar from './components/Navbar';
// import axios from 'axios';

function App() {
  const [products, setProducts] = useState()
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
   
    const loadData =  () => {
      fetch('https://test-wyf4.onrender.com/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
      // setProducts(data)
      // console.log(oga)
    }

    loadData();
  },[])

  const onAddToCart = (product) => {
    fetch('https://test-wyf4.onrender.com/api/products')
    // console.log(product)
    const itemExists = cartItems.find(element => element.id === product.id);
    
    if(itemExists) return
    
    setCartItems(prevState => [...prevState, product])
    
  }

  const onRemoveFromCart = async (id) => {
     fetch('https://test-wyf4.onrender.com/api/cart', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //MAKE AN API CALL AND UPDATE THE STATE BASED ON THE RETRUNED ARRAY ELEMENTS
    //__________________________________________________________________________
    const updatedCart = cartItems.filter(cartItem => cartItem.id !== id);
    setCartItems(updatedCart);
    
  }

  return (
    <div className="App">
     <Router>
        <Navbar />
      <Routes>
          <Route path="/" element={<ProductList products={products} cartItems={cartItems} onAddToCart={onAddToCart} />}/>
          <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={onRemoveFromCart}/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
