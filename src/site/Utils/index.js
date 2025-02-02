import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactUs = () => {
  return (
    <div className='mt-3 row' id='contact-us'>
      <div className='col-md-2'></div>
      
      <Form className='col-md-6 contact-form form'>
        <div className='form_title mb-3'>Contact Us / Feedback</div>
        <Form.Group className='form-group mb-2'>
          <Form.Label >Full Name:</Form.Label>
          <Form.Control type='text' placeholder='Enter your full name' />
        </Form.Group>
        <Form.Group className='form-group mb-2'>
          <Form.Label >Email:</Form.Label>
          <Form.Control type='email' 
            placeholder='Enter your your email address' />
        </Form.Group>
        <Form.Group className='form-group mb-2'>
          <Form.Label>Contact No:</Form.Label>
          <Form.Control className='form-input'
            type='number' placeholder='Enter your contact number' />
        </Form.Group>
        <Form.Group className='form-group mb-2'>
          <Form.Label>Message:</Form.Label>
          <Form.Control as='textarea' rows={3} 
            className='form-input' placeholder='Enter your message' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>

    </div>
  )
}    

export default ContactUs
