
import { Link } from 'react-router-dom'
const ProductBox = ({ boxDetails }) => {
  return (
    <div className='prod_box'>
      {/* <div className='center_title_bar'>Latest Products</div> */}
      <div className='top_prod_box'></div>
      <div className='center_prod_box'>
        <div className='product_title'>
          <a href='details.html'>{ boxDetails.productName } </a></div>
        <div className='product_img'>
          <Link to={'/product-details'}><img src={ boxDetails.productImg }
            alt='' border='0' /></Link>
        </div>
        <div className='prod_price'>
          <span className='reduce'>
            { boxDetails.reducePrice }$</span> &nbsp;&nbsp;
          <span className='price'>
            { boxDetails.actPrice }$</span>
        </div>
      </div>
      <div className='bottom_prod_box'></div>
      <div className='prod_details_tab'> 
        <a href='s' title=''>
          Add to Cart
        </a>
      </div>
    </div>
  )
}

export default ProductBox
