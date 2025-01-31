import { useGetCartItems } from './hooks'

// check product exist or not in cart/store
export const isProductConsistInCart = (newItem, cartList) => {
  const cartExist = cartList.length &&
    cartList.find(el => el.productId === newItem.productId)
  return !(cartExist === undefined)
}

// validate quanity
export const validateQuanity = (val) => {
  let number = 1
  // allow empty value
  if(!val && val !== 0) {
    return val
  }
  if(val.length > 4) {
		
    return val.substring(0, 3)
  }
  const num = +val.trim()
  if (!isNaN(num)) {
    number = (num <= 0 ? 1 : num)
  }

  return number
}

// get quantity of cart item
export const getAddedToCartItemQuantity = (item) => {
  const cartItem = useGetCartItems()
  const selectedItem = cartItem.length &&
		cartItem.find(list => list.productId === item.productId)
  return selectedItem?.qty || 0
}