// import css
import './site/global.css'
import Layout from './site/App'
// import Settlor from './settlor/index'
import { useLocation } from 'react-router-dom'

const settlor = ['/settlor', '/settlor/']
const UiController = () => { 
  return (
    <ConnectToApp />
  )
}

const ConnectToApp = () => {
  const location = useLocation()
  const pathName = location?.pathname || ''
  if(settlor.includes(pathName)) {
    return ''
  } else {
    return <Layout />
  }
}

export default UiController

