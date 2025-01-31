import PropTypes from 'prop-types'
import { Form, NavLink } from 'react-bootstrap'
import BillingAddress from './BillingAddress'
import EditProfile from './EditProfile'
import * as Icon from 'react-bootstrap-icons'
import { useState } from 'react'
const ProfileComponent = ({ locale }) => {
  const [editProfile, setEditProfile] = useState(false)

  return (
    <div className='profile'>
      <div className='bottom-border mb-1 profile-title'>
        <h3 className='mt-2'>{ locale.profile }</h3>
        <NavLink className=''>
          <Icon.Pencil 
            color='black'
            title='Edit Profile'
            className='fa fa-trash ' 
            size={12}
            fontWeight={'bold'}
            onClick={ () => setEditProfile(true)}
          />
        </NavLink>
      </div>
      
      <div className='basic-info'>
        <Form.Label >
          <span className=''>Full Name:</span>
          <span className=''> Kamal Kumar </span>
        </Form.Label>
        <Form.Label >
          <span className=''>Email: </span> 
          <span className=''> kamal1521@yopmail.com </span> 
        </Form.Label>
        <Form.Label >
          <span className=''>Phone:</span> 
          <span className=''>819-921-2121 </span> 
        </Form.Label>
      </div>
      <BillingAddress locale={locale} />
      <EditProfile
        locale={locale}
        show={editProfile}
        handleClose={() => setEditProfile(false)}
      />
    </div>
  )
}

ProfileComponent.propTypes={
  locale: PropTypes.object
}
export default ProfileComponent
