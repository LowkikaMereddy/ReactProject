import React, { useState } from 'react';
import ProductList from './ProductList/ProductList';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <nav>
        {/* Navigation links (e.g., Home, Products, Signup, Login, Cart) */}
      </nav>
      <ProductList addToCart={addToCart} /> {/* Pass addToCart as a prop */}
      <Signup />
      <Login />
      <Cart cartItems={cartItems} />
      <Checkout />
    </div>
  );
}

export default App;