import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { getProductData } from '../MockData/index'

const DashboardComponent = ({ locale }) => {
  const myOrders = getProductData(2)
  return (
    <div className='dashboard'>
      <div className='bottom-border'>
        <h3 className=''> Dashboard </h3>
      </div>
      <div className=''>
        <div className='orders'>
          <h5 className=''> { locale.recentOrder } </h5>
          <div className='bucketItems'>
            <div className=''></div>
            <Table>
              <thead>
                <tr>
                  <th >{ locale.orderNumber }</th>
                  <th width='240px'>{ locale.productName }</th>
                  <th>{ locale.quantity }</th>
                  <th>{ locale.amount }</th>
                  <th>{ locale.totalAmount }</th>
                  <th>{ locale.createdDate }</th>
                </tr>
              </thead>
              <tbody>
                {
                  myOrders && myOrders.map((item, ind) => (
                    <tr key={ ind }>
                      <td>{ ind + 1 }</td>
                      <td>{ item.productName }</td>
                      <td className='cart_box'>
                        { item.qty }
                      </td>
                      <td>{ item.totalPrice }</td>
                      <td>{ item.totalPrice * +item.qty}</td>
                      <td>
                    date
                      </td>
                    </tr>
                  ))
                }
                {/* If item is not added in bucket */}
                {
                  myOrders.length === 0 && (
                    <tr className='text-center'>
                      <td colSpan='5'> {locale.bucket} </td>
                    </tr>
                  )
                } 
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}

DashboardComponent.propTypes={
  locale: PropTypes.object
}
export default DashboardComponent
