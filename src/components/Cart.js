import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      {cart.items.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>${item.price}</p>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <h3>Total: ${cart.total}</h3>
    </div>
  );
};

export default Cart;
