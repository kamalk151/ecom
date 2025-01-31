import {
  productActionType
} from '../constant'
  
const {
  ADD_TO_CART, 
  REMOVE_TO_CART, 
  UPDATE_TO_CART 
} = productActionType

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload
  }
}

export const updateToCart = (payload) => {
  return {
    type: UPDATE_TO_CART,
    payload
  }
}

export const removeToCart = (payload) => {
  return {
    type: REMOVE_TO_CART,
    payload
  }
}
