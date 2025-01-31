import bann2 from './../Assets/img/bann2.jpg'
import { NavLink } from 'react-router-dom'

const Newsletter = () => {
  
  return (
    <div className=''>
      <div className='title_box'>Newsletter</div>
      <div className='border_box'>
        <input type='text'
          name='newsletter'
          className='newsletter_input' 
          value='your email' 
        />
        <NavLink className='join'>join</NavLink> 
      </div>
      <div className='banner_adds'> 
        <NavLink className='active'>
          <img src={bann2} alt='' border='0' />
        </NavLink>
      </div>
    </div>
  )
}

export default Newsletter
