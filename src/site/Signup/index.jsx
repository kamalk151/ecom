import './signup.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SignIn from '../Signin/index'
const Signup = () => {
  return (
    <div className='mt-3' id='signup-form'>
      <Form className='signup-form form'>
        <div className='form_title mb-3'>New User / SignUp</div>
        <Form.Group className='form-group mb-2'>
          <Form.Label >Full Name<em className='required'>* </em>:</Form.Label>
          <Form.Control type='text' placeholder='Enter your full name' />
        </Form.Group>
        <Form.Group className='form-group mb-2'>
          <Form.Label >Email<em className='required'>* </em>:</Form.Label>
          <Form.Control type='email' 
            placeholder='Enter your email' />
        </Form.Group>
        <Form.Group className='form-group mb-2'>
          <Form.Label>Contact No<em className='required'>* </em>:</Form.Label>
          <Form.Control 
            className='form-input' 
            type='number' placeholder='Enter your phone' />
        </Form.Group>
        <Button variant='primary' type='submit'> Submit </Button>
      </Form>
      
      <SignIn />
    </div>
  )
}    

export default Signup
