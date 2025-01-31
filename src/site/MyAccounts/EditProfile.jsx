import PropTypes from 'prop-types'
import {Form} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import {Link} from 'react-router-dom'
const EditProfile = ({ locale, show, handleClose }) => {
  return (
    <div className='profile'>
      <Modal show={show} onHide={handleClose}>
        <Form className='signup-form form'>
          <Modal.Header closeButton>
            <Modal.Title>
              <div className=''>{locale.editProfile } </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='input-group mb-2'>
              <Form.Group className='form-group wd-50 mr-10'>
                <Form.Label >Full Name
                  <em className='required'>* </em>:
                </Form.Label>
                <Form.Control type='text' placeholder='Enter your full name' />
              </Form.Group>
              <Form.Group className='form-group wd-50'>
                <Form.Label >Email<em className='required'>*</em>:</Form.Label>
                <Form.Control type='email'   placeholder='Enter your email' />
              </Form.Group>
            </div>
            <div className='input-group mb-2'>
              <Form.Group className='form-group wd-50 mr-10'>
                <Form.Label>Contact No
                  <em className='required'>* </em>:
                </Form.Label>
                <Form.Control
                  className='form-input'
                  type='number' 
                  placeholder='Enter your phone'
                />
              </Form.Group>
              <Form.Group className='form-group  wd-50'>
                <Form.Label>Zip Code
                  <em className='required'>* </em>:</Form.Label>
                <Form.Control className='form-input'
                  type='number' 
                  placeholder='Enter your phone' 
                />
              </Form.Group>
            </div>
            <Form.Group className='form-group mb-2'>
              <Form.Label>Address<em className='required'>* </em>:</Form.Label>
              <Form.Control 
                className='form-input' 
                type='number' 
                placeholder='Enter your phone' 
              />
            </Form.Group>
            <div className='input-group mb-2'>
              <Form.Group className='form-group wd-50 mr-10'>
                <Form.Label>City<em className='required'>* </em>:</Form.Label>
                <Form.Control 
                  className='form-input' 
                  type='number' 
                  placeholder='Enter your phone' />
              </Form.Group>
              <Form.Group className='form-group  wd-50'>
                <Form.Label>State<em className='required'>* </em>:</Form.Label>
                <Form.Control 
                  className='form-input' 
                  type='number' 
                  placeholder='Enter your phone' />
              </Form.Group>
            </div>
            
            <Form.Group className='form-group mb-2'>
              <Form.Label>Landmark<em className='required'>* </em>:</Form.Label>
              <Form.Control 
                className='form-input'
                type='text' 
                placeholder='Enter Landmark' />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Link to='' className='btn btn-primary'>Save Address</Link>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

EditProfile.propTypes={
  locale: PropTypes.object,
  show: PropTypes.bool,
  handleClose: PropTypes.func
}

export default EditProfile
