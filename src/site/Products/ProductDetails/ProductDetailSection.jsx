import { useState } from 'react'
import * as Icon from 'react-bootstrap-icons'
import { Alert, FormControl, NavLink } from 'react-bootstrap'
import PropTypes from 'prop-types'
import ProductImgs from './ProductImgs'

import CurrencyIcon from '../../CommonComponent/CurrencyIcon'
import locale from '../../Config/lang'
import { validateQuanity, getAddedToCartItemQuantity } from '../helper'

const ProductDetailSection = ({ productInfo, cartHandler }) => {
  const prodInfo = productInfo.length ? productInfo[0] : {}
  const cartsQuantity = getAddedToCartItemQuantity(prodInfo)
  const [quantity, setQuantity] = useState(1)
  const [shaker, setShaker] = useState(false)

  // quantity handler on blur
  const quantityHandlerOnBlur = (val = '', setQuantity) => {
    if (isNaN(val) || !val) {
      setQuantity(1)
    }
  }

  const addToCartHandler = (prodInfo) => {
    cartHandler(prodInfo)
    setShaker(true)
    setTimeout(() => setShaker(false), 1000)
  }

  return (
    <>
      <div className='center_content'>
        <div className='center_title_bar'>{prodInfo.productName}</div>
        <div className='prod_box_big'>
          <div className='top_prod_box_big'></div>
          <div className='center_prod_box_big'>
            {/* left panel */}
            <ProductImgs imgList={prodInfo} />
            {/* right panel */}
            <div className='details_big_box'>
              <div className='product_title_big'>{prodInfo.title}</div>
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
                    {prodInfo.price}
                  </span>
                </p>
                <p className=' '>
                  {locale.price}:
                  <span className='price'><CurrencyIcon />
                    {prodInfo.totalPrice}</span>
                </p>
                <p className=''>
                  {locale.youSave} : <span className='price'><CurrencyIcon />
                    {prodInfo.totalPrice}</span>
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
                <NavLink
                  className={'addtocart'}
                  onClick={() =>
                    addToCartHandler({
                      ...prodInfo,
                      qty: quantity, type: 'cartDetails'
                    })
                  }
                >
                  {locale.addToCart}
                </NavLink>
                {shaker &&
                <Alert variant='light'
                  className={shaker ? 'shakeCart' : ''}
                  transition={false}
                  style={{ lineHeight: '0px' }}> Added to .
                  ({cartsQuantity}) </Alert>}
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
  productInfo: PropTypes.array,
  cartHandler: PropTypes.func
}
export default ProductDetailSection
