import PropTypes from 'prop-types'
import {Form, Alert} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'
import { useState } from 'react'
import AddressForm from '../Checkout/NewAddressForm'

const BillingAddress = ({ locale }) => {
  const [addressForm, setAddressForm] = useState(false)

  return (
    <div className='profile-address'> 
      <div className='bottom-border mb-3 '>
        <div className='profile-title'>
          <h3 className='mt-3'>{ locale.billingAddress }</h3>
          <NavLink className=''>
            <Icon.PlusSquare 
              color='black'
              title='Add New Address'
              className='fa fa-trash ' 
              size={12}
              fontWeight={'bold'}
              onClick={ () => setAddressForm(true)}
            />
          </NavLink>
        </div>

        <em className=''>Primary address will be your default billing address.</em>
      </div>
      <div className='billing-address'>
        <Form.Label>
          <span className='pm-address-height'>
            <Alert className='primary-address'
              variant='success'>Primary Address</Alert>
          </span>
          <span className=''> Kamal Kumar </span>
          <span className=''>
            T-7 f-314 Dream Home Wave City Ghaziabad U.P 201001
          </span>
        </Form.Label>
        <Form.Label>
          <span className='pm-address-height'>
            <Form.Check 
              type='radio'
              id=''
              className=''
              value={''}
              name={'1'}
              onClick={e => {e}}
            />
          </span>
          <span className=''> Kamal Kumar </span>
          <span className=''>
            T-7 f-314 Dream Home Wave City Ghaziabad U.P 201001
          </span>
        </Form.Label>

        <Form.Label>
          <span className='pm-address-height'>
            <Form.Check 
              type='radio'
              id=''
              className=''
              value={''}
              name={'1'}
              onClick={e => {e}}
            />
          </span>
          <span className=''> Kamal Kumar </span>
          <span className=''>
            T-7 f-314 Dream Home Wave City Ghaziabad U.P 201001
          </span>
        </Form.Label>

        <Form.Label>
          <span className='pm-address-height'>
            <Form.Check 
              type='radio'
              id=''
              className=''
              value={''}
              name={'1'}
              onClick={e => {e}}
            />
          </span>
          <span className=''> Kamal Kumar </span>
          <span className=''>
            T-7 f-314 Dream Home Wave City Ghaziabad U.P 201001
          </span>
        </Form.Label>
      </div>
      
      <AddressForm 
        show={addressForm}
        handleClose={() => setAddressForm(false)}
      />
    </div>
  )
}

BillingAddress.propTypes={
  locale: PropTypes.object
}
export default BillingAddress
