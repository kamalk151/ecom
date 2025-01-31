import { useState } from 'react'
import './header.css'
import SearchPanel from './SearchPanel'
import MenuBar from './MenuBar'
import SideCartPanel from '../SideCartPanel'
const NavBar = () => {
  const [isPaneOpen, setIsPaneOpen] = useState(false)

  return (
    <div className=''>
      <SearchPanel />
      <MenuBar isPaneOpen={isPaneOpen} panHandler={ setIsPaneOpen } />
      <SideCartPanel 
        isPaneOpen={isPaneOpen} 
        panHandler={ setIsPaneOpen } 
      />
    </div>
  )
}    

export default NavBar
