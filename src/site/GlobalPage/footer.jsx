// import csscreme from '../Assets/img/csscreme.jpg'
// import payment from '../Assets/img/payment.gif'
import footerLogo from '../Assets/img/gadgets_logo.PNG'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-content'>
      <div className='footer'>
        <div className='left_footer'>
          <img src={footerLogo} alt='' width='170' height='49'/>
        </div>
        <div className='center_footer'>
          Copyright © 2023 Gadgets Le Lo - All Rights Reserved.
        </div>
        <div className='right_footer'> 
          <Link className='privacy' to='/privacy'>Privacy & Policy</Link>
          <Link className='terms' to='/terms'>Terms & Condition </Link>
          <Link className='abouts' to='/aboutUs'>About US</Link>
          <Link to='/contact-us'> Contact US</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
