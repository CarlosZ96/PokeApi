import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products:[
    {id:1, name:'example1', price:100},
    {id:2, name:'example2', price:200},
    {id:3, name:'example3', price:300},
    {id:4, name:'example4', price:400},
    {id:5, name:'example6', price:500},
    {id:6, name:'example7', price:600},
  ],
  cart:[],
}

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.AddToCart:{}
    case TYPES.RomoveOne:{}
    case TYPES.RemoveAll:{}
    case TYPES.ClearCart:{}
    default:
      return state
  }
}