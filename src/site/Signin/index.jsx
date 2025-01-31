// import './signin.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = () => {
  return (
    <Form className='signin-form form'>
      
      <div className='form_title mb-3'>Existing Users / SignIn</div>
      <Form.Group className='form-group mb-2'>
        <Form.Label >Email / Username:</Form.Label>
        <Form.Control type='text' value='kamal'
          placeholder='Enter email / username' />
      </Form.Group>
      <Form.Group className='form-group mb-2'>
        <Form.Label >Password:</Form.Label>
        <Form.Control type='password' 
          value='12345' placeholder='Enter password' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}    

export default Login
