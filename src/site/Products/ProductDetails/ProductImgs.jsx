import PropTypes from 'prop-types'
import { NavLink } from 'react-bootstrap'

const ProductImgs = ({ imgList }) => {
  console.log(imgList, '==imgList')
  return (
    <>
      <div className='product_img_big'> 
        <NavLink title='' className='prod_det_img'>
          <img src={ imgList.productImg } alt='' border='0' />
        </NavLink>
        <div className='thumbs'> 
          <img src={ imgList.productImg } width='50px' alt='' border='0' />
          <img src={ imgList.productImg } width='50px' alt='' border='0' />
          <img src={ imgList.productImg } width='50px' alt='' border='0' />
        </div>
      </div>
    </>
  )
}

ProductImgs.propTypes = {
  imgList: PropTypes.object
}
export default ProductImgs
