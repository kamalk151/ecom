import PropTypes from 'prop-types'
import { useState } from 'react'
import { 
  Navbar
} from 'react-bootstrap'
import SpecialProducts from './SpecialProducts'
// import Newsletter from './NewsLetter'
import PriceFilter from './PriceFilter'
import BrandFilter from './BrandFilter'

const SideFilter = ({ locale }) => {
  const [maxPrice, setMaxPrice] = useState('0')
  const [brand, setBrand] = useState('0')
  console.log(brand, '=====', maxPrice)
  return (
    <div className='nav-menu'>
      <Navbar bg='' className='sidebar'collapseOnSelect expand='sm'>
        <div className='left_content'>
          <PriceFilter 
            maxPrice={maxPrice}
            priceHandler={setMaxPrice}
            locale={locale} />
          <BrandFilter 
            brandHandler={setBrand}
            locale={locale} />
          <SpecialProducts />
          {/* <Newsletter /> */}
        </div>
      </Navbar>
    </div>
  )
}
SideFilter.propTypes = {
  locale: PropTypes.object
}
export default SideFilter
