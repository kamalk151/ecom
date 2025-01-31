import PropTypes from 'prop-types'
import * as Icon from 'react-bootstrap-icons'

const CurrencyRupee = ( { className, size, fontWeight } ) => {
  return (
    <Icon.CurrencyRupee
      color={'black'}
      className={`bi bi-currency-rupee ${className}`}
      size={`${size || 11 }`}
      fontWeight={`${ fontWeight || 'bold' }`}
    />
  )
}

CurrencyRupee.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  fontWeight: PropTypes.string
}
export default CurrencyRupee
