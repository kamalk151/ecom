import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'

import { filter } from '../../MockData'

const BrandFilter = ({locale, brandHandler }) => {
  
  return (
    <Form className='brandBox'>
      <div className='title_box'>{ locale.brand } </div>
      <ul className='left_menu'>
        {
          filter.length && filter.map((el, key) => {
            return (
              <li key={ key } className='odd'>
                <Form.Check 
                  type='checkbox'
                  id=''
                  className=''
                  value={el.label}
                  label={el.label}
                  name={''}
                  onClick={e => brandHandler(e.target.value)}
                />
                {/* <span className=''> {el.label} </span> */}
              </li>)
          })
        }
      </ul>
    </Form>
  )
}
BrandFilter.propTypes = {
  locale: PropTypes.object,
  brandHandler: PropTypes.func
}
export default BrandFilter
