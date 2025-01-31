import PropTypes from 'prop-types'
import CurrencyIcon from '../CommonComponent/CurrencyIcon'
import RangeSlider from 'react-bootstrap-range-slider'

const PriceFilter = ({locale, priceHandler, maxPrice}) => {

  return (
    <div className='priceFilter brandBox'>
      <div className='title_box'>{ locale.price } </div>
      <ul className='left_menu'>
        <li className='odd'>
          <RangeSlider
            value={maxPrice}
            tooltip={'auto'}
            step={2}
            tooltipLabel={(value) => <><CurrencyIcon />{ value }</> }
            max={5000}
            min={0}
            onChange={e => priceHandler(e.target.value)}
          />
        </li>
      </ul>
    </div>
  )
}
PriceFilter.propTypes = {
  locale: PropTypes.object,
  maxPrice: PropTypes.string,
  priceHandler: PropTypes.func
}
export default PriceFilter
