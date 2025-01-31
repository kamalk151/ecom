import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './GlobalPage/index'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  )
}

export default App
