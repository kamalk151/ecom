// import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { Table, Button, FormControl } from 'react-bootstrap'
// import * as Icon from 'react-bootstrap-icons'
import {
  useGetCartItems,
  useDispatchCartAction
} from '../ProductDetails/hooks'
import locale from '../Config/lang'
import {
  validateQuanity
} from '../ProductDetails/helper'
import { removeToCart } from '../Action/cartAction'
import BucketItems from './BucketItems'

const CartItems = () => {
  const cartItem = useGetCartItems()
  const [inputQnty, setInputQnty] = useState({})
  const cartDispatch = useDispatch()

  // quantity handler
  const quantityHandler = (e, item) => {
    const qty = validateQuanity(e.target.value)
    setInputQnty({ ...inputQnty, [e.target.name]: qty })
    cartDispatch(
      useDispatchCartAction(cartItem, {
        ...item, qty, type: 'cartItems'
      })
    )
  }
	
  // quantity handler
  const removeItemToCart = (id) => {
    cartDispatch(
      removeToCart({ productId: id })
    )
  }

  // quantity handler on blur
  const quantityHandlerOnBlur = (e, item) => {
    if (isNaN(e.target.value) || !e.target.value) {
      setInputQnty({ ...inputQnty, [e.target.name]: 1 })
      cartDispatch(
        useDispatchCartAction(cartItem, {
          ...item, qty: 1, type: 'cartItems'
        })
      )
    }
  }

  return (
    <BucketItems
      locale={locale}
      cartItem={cartItem}
      quantity={inputQnty}
      handleRemoveItem={removeItemToCart}
      qtyHandler={quantityHandler}
      qtyBlurHandler={quantityHandlerOnBlur}
    />
  )
}

// CartItems.propTypes = { 
// }
export default CartItems
