import React from 'react'

const Cartitem = ({data, deleteFromCart}) => {
  let {id, name, price} = data;
  return (
    <div>
      <h3>{name}</h3>
      <h4>${price}.00</h4>
    </div>
  )
}

export default Cartitem;