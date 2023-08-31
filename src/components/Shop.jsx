import React, { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducers';
import ProItem from './ProItem';
import { TYPES } from '../actions/shoppingActions';
import Cartitem from './Cartitem';

const ShopCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const{products, cart} = state;

  const addToCart = (id) => {
    dispatch({type:TYPES.AddToCart, payload:id})
  };

  const deleteFromCart = () => {};

  const clearCart = () => {};

  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Product</h3>
      <article className="box">
      {products.map((product)=> (
        <ProItem key={product.id} data={product} addToCart={addToCart}/>
      ))}  
      </article>
      <h3>Cart</h3>
      <article className="box">
      <button onClick={clearCart}>Clear Cart</button>
        {
          cart.map((item, index) => <Cartitem key={index} data={item} deleteFromCart={deleteFromCart} />)
        }
      </article>
    </div>
  )
}

export default ShopCart;