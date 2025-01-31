import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import NewAddressForm from './NewAddressForm'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const AddressList = ({show, handleClose}) => {
  const [appearNewAddress, setAppearNewAddress] = useState(false)
 
  return (
    <div className='address-form' id='address-form'>
      <Modal show={show} onHide={handleClose}>
        <Form className='form address-list'>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className=''>Add New Address</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='input-group mb-2'>
              <Form.Group className='form-group wd-50 mr-10'>
                <Form.Check
                  name='address-list'
                  type='radio'
                  placeholder='Enter your full name' />
                <Form.Label> T-7, 314 Dream Home, Wave City, Ghaziabad, U.P. 201001 </Form.Label>
              </Form.Group>
            </div>
            <div className='input-group mb-2'>
              <Form.Group className='form-group wd-50 mr-10'>
                <Form.Check
                  type='radio'
                  name='address-list'
                  placeholder='Enter your full name' />
                <Form.Label> T-7, 314 Dream Home, Wave City, Ghaziabad, U.P. 201001 </Form.Label>
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Link 
              className='btn btn-primary'
              variant='primary'
              onClick={() => setAppearNewAddress(true)}
            >
              New Address
            </Link>
            <Link to=''
              className='btn btn-primary'
              variant='primary' 
              onClick={''}
            >
              Update Address
            </Link>
          </Modal.Footer>
        </Form>
      </Modal>
      <NewAddressForm show={appearNewAddress} handleClose={setAppearNewAddress} />
    </div>
  )
}

AddressList.propTypes = {
  isPaneOpen: PropTypes.string,
  panHandler: PropTypes.func,
  show: PropTypes.bool,
  handleClose: PropTypes.func
}

export default AddressList
