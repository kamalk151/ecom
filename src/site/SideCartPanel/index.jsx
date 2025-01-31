import SlidingPane from 'react-sliding-pane'
import PropTypes from 'prop-types'
import 'react-sliding-pane/dist/react-sliding-pane.css'
import './index.css'
import CartItems from '../CartItems/index'

const SideCartPanel = ({isPaneOpen, panHandler}) => {
  return (
    <div>
      <SlidingPane
        className='some-custom-class'
        overlayClassName='some-custom-overlay-class'
        isOpen={isPaneOpen}
        title='View all selected items before proceed to checkout'
        subtitle='Manage cart items'
        onRequestClose={() => {
          panHandler(false)
        }}
      >
        <div className=''></div>
        <CartItems />
      </SlidingPane>
    </div>
  )
}

SideCartPanel.propTypes = {
  isPaneOpen: PropTypes.bool,
  panHandler: PropTypes.func
}
export default SideCartPanel
