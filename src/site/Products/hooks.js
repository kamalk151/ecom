import {addToCart, updateToCart} from '../Action/cartAction'
import { isProductConsistInCart } from './helper'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export const usePriceFilter = () => {
  const [priceValue, setPriceValue] = useState(0)

  return {
    priceValue,
    setPriceValue}
}

export const useDispatchCartAction = (cartList, cartItem) => {
  let cartAction = ''
  if(!cartList.length) {
    cartAction = addToCart(cartItem)
  } else {
    const isProductExist = isProductConsistInCart(cartItem, cartList)
    cartAction = (isProductExist) ? updateToCart(cartItem) : addToCart(cartItem)
  }
  return cartAction
}

// get cart items from store
export const useGetCartItems = () => {
  const cartItem = useSelector(state => state.cart.data)
  return cartItem
}
