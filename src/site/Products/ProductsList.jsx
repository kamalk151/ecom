import PropTypes from 'prop-types'
import ProductBox from './ProductBox'
import { productData } from '../MockData'

const ProductsList = ({ locale }) => {
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

ProductsList.propTypes = {
  locale: PropTypes.object
}

export default ProductsList
