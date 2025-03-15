import React, {useState} from 'react';

function Cart({ cartItems }) {
  const [quantity, setQuantity] = useState(1);
  const total = cartItems.reduce((acc, item) => acc + item.price * quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item._id}>
          {item.name} - ${item.price}
          <button onClick={()=>{setQuantity(quantity + 1)}}> + </button>
          {quantity}
          <button onClick={()=>{setQuantity(quantity - 1)}}> - </button>
        </div>
      ))}
      <p>Total: ${total}</p>
      <button>Checkout</button>
    </div>
  );
}

export default Cart;