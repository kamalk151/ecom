import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './GlobalPage/index'
// import { BrowserRouter as Router, HashRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout />
      </HashRouter>
    </div>
  )
}

export default App
