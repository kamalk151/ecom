
import PropTypes from 'prop-types'
const PaymentMethod = () => {
  // console.log(boxDetails)
  return (
    <div className='payment-method  mt-1 '>
      <div className='payment-container'>
        <div className='center_title_bar'>Payment Method</div>
        <div className=''>
          <ul>
            <li className=''>
              Cash
            </li>
            <li className=''>
              Credit/Debit
            </li>
            <li className=''>
              Paytm
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

PaymentMethod.propTypes = {
  boxDetails: PropTypes.array
}
export default PaymentMethod
