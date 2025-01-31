import {
  productActionType
} from '../constant'

const {
  ADD_TO_CART,
  REMOVE_TO_CART,
  UPDATE_TO_CART 
} = productActionType
  
const initailCartList = {
  data : []
}

// add item to cart
const addItemToCart = (state, payload) => {
  const cartState = [ ...state.data ]
  cartState.push(payload)
  return { ...state, data: cartState }
}

// updated item to cart
const updateItemToCart = (state, payload) => {
  const itemList = [ ...state.data ]
  const updatedItem = itemList.map((item) => {
    if(item.productId === payload.productId) {
      const qty = payload.type === 'cartItems' ?
        (+payload.qty) : +(item.qty) + (+payload.qty)
      item.qty = `${qty}`
    }
    return item
  })
  return { ...state, data: updatedItem }
}

const removeItem = (state, data) => {
  console.log(data, '==0===-', state)
  const newItem = state.data.filter((item) => item.productId !== data.productId)
  console.log(newItem, '=')
  return {...state, data: newItem}
}
// cart reducer
const cartReducer = (state = initailCartList, action) => {
  switch(action.type) {
  case ADD_TO_CART : 
    return addItemToCart(state, action.payload)
  case UPDATE_TO_CART :
    return updateItemToCart(state, action.payload)
  case REMOVE_TO_CART: 
    return removeItem(state, action.payload)
  default : return state
  }
}

export default cartReducer