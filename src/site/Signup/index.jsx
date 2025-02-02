import './signup.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SignIn from '../Signin/index'
import { useState } from 'react';

const Signup = () => {
  const [formInput, setFormInput] = useState({ name: '', email: '', phone: '' })

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
    <div className='mt-3' id='signup-form'>
      <Form className='signup-form form' onSubmit={handleSubmit}>
        <div className='form_title mb-3'>New User / SignUp</div>
        <Form.Group className='form-group mb-2'>
          <Form.Label>Full Name<em className='required'>* </em>:</Form.Label>
          <Form.Control
            type='text'
            name='name'
            value={formInput.name}
            placeholder='Enter your full name'
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className='form-group mb-2'>
          <Form.Label >Email<em className='required'>* </em>:</Form.Label>
          <Form.Control
            type='email'
            name='email'
            value={formInput.email}
            placeholder='Enter your email'
            onChange={handleInput}
          />
        </Form.Group>
        <Form.Group className='form-group mb-2'>
          <Form.Label>Contact No<em className='required'>* </em>:</Form.Label>
          <Form.Control
            name='phone'
            value={formInput.name}
            className='form-input' 
            type='number' placeholder='Enter your phone' onChange={handleInput} />
        </Form.Group>
        <Button variant='primary' type='submit'> Submit </Button>
      </Form>
      
      <SignIn />
    </div>
  )
}    

export default Signup
