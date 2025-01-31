import PropTypes from 'prop-types'
import CurrencyIcon from '../CommonComponent/CurrencyIcon'
import { Link } from 'react-router-dom'

const ProductBox = ({ boxDetails, locale }) => {
  
  return (
    <div className='prod_box'>
      
      <div className='top_prod_box'></div>
      <div className='center_prod_box'>
        <Link to={`/product/details/${ boxDetails.productId }`} >
          <div className='product_title'> { boxDetails.productName } </div>
          <div className='product_img'>
            <img src={ boxDetails.productImg } alt='' border='0' />
          </div>
          <div className='prod_price'>
            <span className='reduce'>
              <CurrencyIcon />
              { (boxDetails.price) } 
            </span> &nbsp;&nbsp;
            <span className='price'>
              <CurrencyIcon />
              { boxDetails.totalPrice } 
            </span>
          </div>
        </Link>
      </div>
      <div className='bottom_prod_box'></div>
      <div className='prod_details_tab'> 
        <Link to={`/product/details/${ boxDetails.productId }`} title=''>
          { locale.buyNow }
        </Link>
      </div>
    </div>
  )
}

ProductBox.propTypes={
  boxDetails: PropTypes.object.isRequired,
  locale: PropTypes.object.isRequired
}

export default ProductBox

