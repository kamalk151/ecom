
import { NavLink } from 'react-bootstrap'
import locale from '../../Config/lang'
import { useDispatch } from 'react-redux'
import * as Icon from 'react-bootstrap-icons'

import { useDispatchCartAction, useGetCartItems } from '../hooks'

const AddToCartButton = ({ productInfo, shakerHandler, type }) => {
  const prodInfo = productInfo
  const dispatch = useDispatch()
  const cartList = useGetCartItems()
  console.log(prodInfo, '==productInfo', '==quantity')
  
  // cart action handler
  const addToCartHandler = (item) => {
    console.log('item', item)
    dispatch(
      useDispatchCartAction(cartList, item)
    )
    shakerHandler()
  }

  return (
    <div className={'addtocart'}>
      <NavLink
        onClick={() =>
          addToCartHandler({
            ...prodInfo,
            type: 'cartDetails'
          })
        }
      > { type === 'icon' 
          ? (<Icon.Cart4
            color='black'
            title='Add to cart'
            className='bi bi-star-fill'
            size={12}
            fontWeight={'bold'}
          />)
            : locale.addToCart
          }
      </NavLink>
      
    </div>
  )
}

// AddToCartButton.propTypes = {
//   productInfo: PropTypes.array,
//   cartHandler: PropTypes.func
// }
export default AddToCartButton
