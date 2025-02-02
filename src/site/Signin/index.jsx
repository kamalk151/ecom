// import './signin.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const Login = () => {
  const [formInput, setFormInput] = useState({ password: '', email: '' })

  const handleInput = (e) => {
    e.preventDefault()
    const name = e.target.name
    setFormInput(prev => ({
      ...prev,
      [name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }
  
  return (
    <Form className='signin-form form' onSubmit={handleSubmit}>
      <div className='form_title mb-3'>Existing Users / SignIn</div>
      <Form.Group className='form-group mb-2'>
        <Form.Label >Email / Username:</Form.Label>
        <Form.Control
          type='text'
          value={formInput.email}
          name='email'
          placeholder='Enter email / username'
          onChange={handleInput}
        />
      </Form.Group>
      <Form.Group className='form-group mb-2'>
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type='password'
          name='password'
          value={formInput.password}
          placeholder='Enter password'
          onChange={handleInput}  
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}    

export default Login
