import { useState } from 'react'
import AddressList from './AddressList'
import {Link} from 'react-router-dom'
const Address = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className='checkout-address' >
      <div className='address-container'>
        
        <div className='center_title_bar'>Billing Address </div>
        <div className='shipping-address mt-2'>
          <p className=''>Mayur Vihar, Dasna</p>
          <p className=''>Ghaziabad, 201001</p>
          <p className=''><span>+91-&nbsp;</span>8010258023</p>
          <p className=''>
            <span>Near / Landmark: &nbsp;</span>
            New Shiv Mandir</p>
          <p className=''>Uttar Pradesh, India</p>
        </div>
        <div className=''>
          <Link to={''} className='' onClick={ handleShow }> 
            Add New Address
          </Link>
        </div>
      </div>
      <AddressList show={show} handleClose={handleClose}/>
    </div>
  )
}

export default Address