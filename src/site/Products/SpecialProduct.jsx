import PropTypes from 'prop-types'
import ProductBox from './ProductBox'
import { getProductData } from '../MockData/index'

const SpecialProduct = ({ locale }) => {
  const productData = getProductData(20)
  // productData.sort
  return (
    <>
      <div className='center_title_bar'>
        {/* { locale.latestProduct }  */}
        Total Products: ( { productData.length } )
      </div>
      <div className='product_box'>
        {
          productData.map((boxDetails, ind) => {
            return <ProductBox
              key={ind}
              boxDetails={ boxDetails } 
              locale={locale}
            />
          })
        }
      </div>
    </>
  )
}

SpecialProduct.propTypes = {
  locale: PropTypes.object
}

export default SpecialProduct
