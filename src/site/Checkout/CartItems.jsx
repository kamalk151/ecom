import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
import {removeToCart} from '../Action/cartAction'
import { useDispatch } from 'react-redux'
import locale from '../Config/lang'

const CartItems = ({ items, CurrencyIcon }) => {
  const cartDispatch = useDispatch()
  // quantity handler
  const removeItemToCart = (id) => {
    cartDispatch(
      removeToCart({productId: id})
    )
  }

  return (
    <div className='cart-items'>
      <div className='cart-container'>
        <div className='center_title_bar'>{ locale.selectedProducts } </div>
        <div className='cart-product'>
          { 
            items.map((item, key) => (
              <div key={key} className='product-details ml-15'>
                <div className='details_big_boxs'>
                  <div className='product_title_big'>
                    { item.title } </div>
                  <div className='specifications'> 
                    <p className='line-height'>
                      <span className=''>{ locale.brand }: </span>
                      <span className='blue'> { item.productBrand } </span> 
                    </p>
                    <p className='line-height'> 
                      <span className=''> { locale.quantity }: </span>
                      <span className='blue'>{ item.qty } </span>
                    </p>
                    <p className='line-height'>
                      <span className=''> { locale.totalPrice }: </span>
                      <span className='price'> 
                        <CurrencyIcon />{item.totalPrice*item.qty}
                      </span>
                    </p>
                  </div>
                  <div className='delete-prod'>
                    <Button variant='' size='sm' className=''>
                      <Icon.Trash
                        color='black'
                        title='Delete'
                        className='fa fa-trash' 
                        size={12}
                        fontWeight={'bold'}
                        onClick={ () => removeItemToCart(item.productId)}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

CartItems.propTypes = {
  items: PropTypes.array,
  CurrencyIcon: PropTypes.func
}
export default CartItems
