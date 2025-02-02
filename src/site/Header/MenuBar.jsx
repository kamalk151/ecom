
import PropTypes from 'prop-types'
import { Navbar } from 'react-bootstrap'
import { menuConfig } from '../Config/index'
import { NavLink, Link } from 'react-router-dom'
import { useGetCartItems } from '../Products/hooks'

const Menu = ({isPaneOpen, panHandler}) => {
  const cartItems = useGetCartItems()
  return (
    <div className='nav-menu' data-testid='main_content'>
      {/* <ListItem item={menu} /> */}
      <Navbar collapseOnSelect expand='sm' data-testid='menu_tab'>
        <div className='left_menu_corner'></div>
        <ul className='menu'>
          {
            menuConfig.map((el) => (
              <li key={el.label}> 
                <NavLink to={el.to}
                  className={el.className}> {el.label} </NavLink>
                <span className='divider'></span>
              </li>
            ))
          }
          <li className='cart-menu' >
            <Link href='d' 
              onClick={() => panHandler(!isPaneOpen) } 
              className='addtocart'>
              <span className='circle cart-qty'>
                ( { cartItems.length } )</span>
            </Link>
          </li>
        </ul>
        
        <div className='right_menu_corner'></div>
      </Navbar>
    </div>
  )
}

Menu.propTypes = {
  isPaneOpen: PropTypes.bool,
  panHandler: PropTypes.func,
}
export default Menu
