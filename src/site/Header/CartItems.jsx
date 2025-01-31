// import { useState } from 'react'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'
import Table from 'react-bootstrap/Table'

const SideCartPanel = ({isPaneOpen, panHandler}) => {
  return (
    <div>
      <SlidingPane
        className='some-custom-class'
        overlayClassName='some-custom-overlay-class'
        isOpen={isPaneOpen}
        title='Hey, it is optional pane title.  I can be React component too.'
        subtitle='Optional subtitle.'
        onRequestClose={() => {
          panHandler(false)
        }}
      >
        <div className=''></div>
        <Table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tbody>
        </Table>
      </SlidingPane>
    </div>
  )
}

export default SideCartPanel
