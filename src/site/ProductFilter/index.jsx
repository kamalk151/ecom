import PropTypes from 'prop-types'
import SideFilter from './SideFilter'
import './filter.css'

const SideBar = ({ locale }) => {
  return (
    <div className='navigation'>
      <SideFilter locale={locale} />
    </div>
  )
}    

SideBar.propTypes = {
  locale: PropTypes.object.isRequired
}
export default SideBar
