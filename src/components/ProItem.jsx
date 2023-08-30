import React from 'react'

const ProItem = ({ data, addToCart }) => {
  let { id, name, price } = data;
  return (
    <div>
     <h4>{name}</h4>
     <h5>${price}.00</h5>
     <button onClick={() => addToCart(id)}>Add</button>
    </div>
  )
}

export default ProItem