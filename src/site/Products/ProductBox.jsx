import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'
import CurrencyIcon from '../CommonComponent/CurrencyIcon'

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
      <div className='bottom_prod_box'>
      </div>
      <div className='prod_details_tab'>
        <Link to={`/product/details/${ boxDetails.productId }`} title='Product details'>
          { locale.detailView }
        </Link>
        <Icon.Cart4
          color='black'
          title='Add to cart'
          className='bi bi-star-fill'
          size={12}
          fontWeight={'bold'}>
        </Icon.Cart4>
      </div>
    </div>
  )
}

ProductBox.propTypes={
  boxDetails: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    productImg: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
  locale: PropTypes.object.isRequired
}

export default ProductBox

