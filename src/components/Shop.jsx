import React, { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducers';
import ProItem from './ProItem';

const ShopCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const{products, cart} = state;

  const addToCart = (id) => {};

  const deleteFromCart = () => {};

  const clearCart = () => {};

  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Product</h3>
      <article className='box'>
      {products.map((product)=> (
        <ProItem key={product.id} data={product} addToCart={addToCart}/>
      ))}  
      </article>
    </div>
  )
}

export default ShopCart;