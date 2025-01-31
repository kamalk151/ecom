import { NavLink, Route, Routes } from 'react-router-dom'
import Orders from './Orders'
import Profile from './Profile'
import locale from '../Config/lang'
import Dashboard from './Dashboard'
import './account.css'

const MyAccountComponent = () => {
  const filter = [{
    label: 'Dashboard', 
    class: '', 
    id: '', 
    to: '/my-account/'
  },{
    label: 'My Orders', 
    class: '', 
    id: '', 
    to: '/my-account/orders'
  },{
    label: 'Profile', 
    class: '', 
    id: '', 
    to: '/my-account/profile'
  }]

  return (
    <div className='accountContainer mt-3' id='home'>
      <div className='dashboard-left  mt-3'>
        <ul className='left_menu'>
          {
            filter && filter.map((el, key) => {
              return (
                <li key={ key } className='odd'>
                  <NavLink to={el.to}> {el.label} </NavLink>
                </li>)
            })
          }
        </ul>
      </div>
      <div className='dashboard-right mt-3'>
        <Routes>
          <Route exact path='/' element={<Dashboard locale={locale} />} />
          <Route path='/profile' element={<Profile locale={locale} />} />
          <Route path='/orders' element={<Orders locale={locale} />} />
        </Routes>
      </div>
    </div>
  )
}

MyAccountComponent.propTypes = {

}
export default MyAccountComponent
