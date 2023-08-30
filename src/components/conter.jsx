import React, { useReducer } from 'react'


const initialState = { conter: 0 }
function reducer(state, action) {
  switch (action.type) {
    case 'increase':
   return {conter: state.conter+action.payload}
    case 'increase5':
   return {conter: state.conter+action.payload}
    case 'decrease':
   return {conter: state.conter-action.payload}
    case 'decrease5':
   return {conter: state.conter-action.payload}
    case 'reset':
   return {conter: state.conte=0}
    default:
      return state;
  }
}


const Conter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const Increase = () => dispatch({type:'increase', payload:1})
  const Increase5 = () => dispatch({type:'increase5', payload:5})
  const Decrease = () => dispatch({type:'decrease', payload:1})
  const Decrease5 = () => dispatch({type:'decrease',  payload:5})
  const Reset = () => dispatch({type:'reset'})

  return (
    <div>
      <h1>Contador</h1>
      <br />
      <nav>
        <button onClick={Increase5}>+5</button>
        <button onClick={Increase}>+</button>
        <button onClick={Reset}>reset</button>
        <button onClick={Decrease}>-</button>
        <button onClick={Decrease5}>-5</button>
      
        <h3>{state.conter}</h3>
      </nav>
    </div>
  )
}

export default Conter;