import PropTypes from 'prop-types'
import { Table, Button, FormControl } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

const BucketItems = ({
  quantity,
  locale,
  cartItem, 
  handleRemoveItem,
  qtyHandler,
  qtyBlurHandler
}) => {

  console.log(quantity, 'cartItem: indicator-', cartItem)
  return (
    <div className='bucketItems'>
      <Table>
        <thead>
          <tr>
            <th width='240px'>{ locale.productName }</th>
            <th>{ locale.quantity }</th>
            <th>{ locale.price }</th>
            <th>{ locale.totalPrice }</th>
            <th>{ locale.action }</th>
          </tr>
        </thead>
        <tbody>
          {
            Array.isArray(cartItem) && cartItem.map((item, ind) => (
              <tr key={ ind }>
                <td>{ item.productName }</td>
                <td className='qtyBox'>
                  <FormControl type='number'
                    name={`prodId${item.productId}`}
                    onChange={(e) => qtyHandler(e, item) }
                    onBlur={(e) => qtyBlurHandler(e, item)}
                    className='addQtyToCart'
                    value={(`prodId${item.productId}` in quantity ?
                      quantity[`prodId${item.productId}`]: item.qty)}
                    // value={item.qty}
                  />
                </td>
                <td>{ item.totalPrice }</td>
                <td>{ item.totalPrice * +item.qty}</td>
                <td> 
                  <Button variant='' size='sm' className=''>
                    <Icon.Trash
                      color='black' 
                      className='fa fa-trash' 
                      size={12} fontWeight={'bold'}
                      onClick={ () => handleRemoveItem(item.productId)}
                    />
                  </Button>
                </td>
              </tr>
            ))
          }
          {/* If item is not added in bucket */}
          {
            !cartItem.length && (
              <tr className='text-center'>
                <td colSpan='5'> {locale.bucket} </td>
              </tr>
            )
          } 
        </tbody>
      </Table>
    </div>
  )
}

BucketItems.propTypes = {
  locale: PropTypes.object.isRequired,
  handleRemoveItem: PropTypes.func,
  qtyBlurHandler: PropTypes.func,
  qtyHandler: PropTypes.func,
  cartItem: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.string.isRequired
  // Add other properties as needed
  })).isRequired,
  quantity: PropTypes.object
}

BucketItems.defaultProps = {
  locale: {},
  handleRemoveItem: () => { },
  qtyBlurHandler: () => { },
  qtyHandler: () => { },
  cartItem: [],
  quantity: {}
}

export default BucketItems