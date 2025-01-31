import ProductDetailSection from './ProductDetailSection'
import { productData } from '../MockData'
import { useParams } from 'react-router-dom'
import './product.css'
import { useDispatchCartAction, useGetCartItems } from './hooks'
import { useDispatch } from 'react-redux'

const ProductDetail = () => {
  const param = useParams()
  const dispatch = useDispatch()
  const cartList = useGetCartItems()
  
  // cart action handler
  const cartHandler = (item) => {
    dispatch(
      useDispatchCartAction(cartList, item)
    )
  }

  return (
    <div className='center_content' id='product-details'>
      <ProductDetailSection
        productInfo={
          productData.filter(el => el.productId === param.id)
        }
        cartHandler={cartHandler}
      />
    </div>
  )
}

export default ProductDetail
