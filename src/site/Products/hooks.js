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

/**
 * Determines the appropriate cart action based on the current cart list and the item to be added or updated.
 *
 * @param {Array} cartList - The current list of items in the cart.
 * @param {Object} cartItem - The item to be added or updated in the cart.
 * @returns {Function} - The action to be dispatched (addToCart or updateToCart).
 */
export const useDispatchCartAction = (cartList, cartItem) => {
  let cartAction = ''

  // If the cart is empty, add the new item to the cart
  if(!cartList.length) {
    cartAction = addToCart(cartItem)
  } else {
    // Check if the product already exists in the cart
    const isProductExist = isProductConsistInCart(cartItem, cartList)
    // If the product exists, update the cart with the new item details
    // Otherwise, add the new item to the cart
    cartAction = (isProductExist)
      ? updateToCart(cartItem)
      : addToCart(cartItem)
  }
  return cartAction
}

/**
 * Custom hook to retrieve the list of items in the cart from the Redux store.
 * @returns {Array} - The current list of items in the cart.
 */
export const useGetCartItems = () => {
  // Use the useSelector hook to access the cart data from the Redux store
  const cartItem = useSelector(state => state.cart.data)
  // Return the list of items in the cart
  return cartItem
}
