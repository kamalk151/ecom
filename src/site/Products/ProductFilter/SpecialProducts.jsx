import { Link } from 'react-router-dom'
import { getProductData } from '../../MockData'
import locale from '../../Config/lang'
import CurrencyIcon from '../../CommonComponent/CurrencyIcon'

const SpecialProduct = () => {
  /* set random product */
  const specialProduct = getProductData(10)
  let product = specialProduct.length ? specialProduct[0] : []
  const randomId = Math.floor(Math.random() * 2000)
  const randomProd = specialProduct.find(item => randomId === item.productId)
  product = [randomProd ? randomProd : product]
  /* set random product */

  return (
    <>
      <div className=''>
        <div className='title_box'> {locale.specialProduct} </div>
        { product.map( itm => (
          <div key={itm.productId} className='border_box'>
            <div className='product_title'>
              {itm.productName}
            </div>
            <div className='product_img'>
              <Link to={`/product/details/${itm.productId}`} >
                <img src={itm.productImg} alt='' border='0' />
              </Link>
            </div>
            <div className='prod_price'>
              <span className='reduce'>
                {locale.mrp}:
                <CurrencyIcon />{itm.price}</span>
          &nbsp;
              <br />
              <span className='price'>
                { locale.price } :
                <CurrencyIcon />{itm.totalPrice}</span>
            </div>
          </div>
        )) }
      </div>
    </>
  )
}

export default SpecialProduct
