import { useState } from 'react'
import * as Icon from 'react-bootstrap-icons'
import { Alert, FormControl } from 'react-bootstrap'
import PropTypes from 'prop-types'
import ProductImgs from './ProductImgs'
import './../product.css'

import CurrencyIcon from '../../CommonComponent/CurrencyIcon'
import locale from '../../Config/lang'
import { getProductData } from '../../MockData'
import { validateQuanity, getTotalQuantities } from '../helper'
import AddToCartButton from './AddToCartButton'
import { useParams } from 'react-router-dom'

const ProductDetailSection = () => {
  const param = useParams()
  const productData = getProductData(60)
  const prodInfo = productData.filter(el => el.productId === param.id)
  const productInfo = prodInfo[0] ?? {}

  const cartsQuantity = getTotalQuantities(productInfo)
  const [quantity, setQuantity] = useState(1)
  const [shaker, setShaker] = useState(false)

  // quantity handler on blur
  const quantityHandlerOnBlur = (val = '') => {
    if (isNaN(val) || !val) {
      setQuantity(1)
    }
  }

  const shakerHandler = () => {
    setShaker(true)
    setTimeout(() => setShaker(false), 1000)
  }

  return (
    <>
      <div className='center_content'>
        <div className='center_title_bar'>{productInfo.productName}</div>
        <div className='prod_box_big'>
          <div className='top_prod_box_big'></div>
          <div className='center_prod_box_big'>
            {/* left panel */}
            <ProductImgs imgList={productInfo} />
            {/* right panel */}
            <div className='details_big_box'>
              <div className='product_title_big'>{productInfo.title}</div>
              <div className='specifications'>
                <p className='line-height'>
                  <span className=''> {locale.brand}: </span>
                  <span className='blue'>Mic</span>
                </p>
                <p className='line-height'>
                  <span className=''> {locale.manufacturer}: </span>
                  <span className='blue'>TVA</span>
                </p>
                <p className='line-height'> <span className=''>
                  <Icon.StarFill color='black'
                    className='bi bi-star-fill' size={12} fontWeight={'bold'} />
                  <Icon.StarFill color='black'
                    className='fa fa-Star-fill' size={12} fontWeight={'bold'} />
                  <Icon.StarHalf color='black'
                    className='fa fa-Star' size={12} fontWeight={'bold'} />
                  <Icon.Star color='black'
                    className='fa fa-Star' size={12} fontWeight={'bold'} />
                  <Icon.Star color='black'
                    className='fa fa-Star' size={12} fontWeight={'bold'} />
                </span>
                <span className='blue'>
                  &nbsp; 200 {locale.rating}
                </span> </p>
                <p className='line-height'>
                  <span className=''>
                  1K+ {locale.boughtInPast}</span>
                </p>
              </div>
              <div className='prod_price_big mt-4'>
                <p className=''> {locale.mrp}:
                  <span className='reduce'>
                    <CurrencyIcon />
                    {productInfo.price}
                  </span>
                </p>
                <p className=' '>
                  {locale.price}:
                  <span className='price'><CurrencyIcon />
                    {productInfo.totalPrice}</span>
                </p>
                <p className=''>
                  {locale.youSave} : <span className='price'><CurrencyIcon />
                    {productInfo.totalPrice}</span>
                </p>
              </div>
              <div className='cart_box'>
                <FormControl type='number'
                  className='addQtyToCart mr-10'
                  name=''
                  value={quantity}
                  onChange={(e) => setQuantity(validateQuanity(e.target.value))}
                  onBlur={(e) => quantityHandlerOnBlur(e.target.value)}
                />
                <AddToCartButton 
                  productInfo={{ ...productInfo, qty: quantity}}
                  shakerHandler={shakerHandler}
                />
                {shaker &&
                <Alert variant='light'
                  className={shaker ? 'shakeCart' : ''}
                  transition={false}
                  > Added to cart
                  ({cartsQuantity}) </Alert>}
              </div>
              <div className='buy_now'>
                <button className='buy_now btn '> {locale.buyNow} </button>
              </div>
            </div>
          </div>
          <div className='bottom_prod_box_big'></div>
        </div>
        <div className='center_title_bar'>{locale.similarProducts}</div>
      </div>
    </>
  )
}

ProductDetailSection.propTypes = {
  productInfo: PropTypes.array
}
export default ProductDetailSection
