import { Routes, Route} from 'react-router-dom'
import './index.css'

// import ProductFilter from '../ProductFilter'
import AboutUs from '../StaticPages/AboutUs'
import Checkout from '../Checkout/index'
import Contact from '../StaticPages/ContactUs'
import Footer from './footer'
import Home from '../Home/index'
import NavBar from '../Header/index'
import Product from '../Products/index'
import SignUp from '../Signup/index'
import SpecialProducts from '../SpecialProducts/index'
import Terms from '../StaticPages/Terms'
import Privacy from '../StaticPages/Privacy'
import MyAccounts from '../MyAccounts'
import ProductDetails from '../ProductDetails'

const Layout = () => {
  // const location = useLocation()
  // const pageIncludesFilter = ['/products', '/special-products']
  // const pathName = location?.pathname || ''
  return (
    <div className=''>
      <div className='header-container'>
        <NavBar />
      </div>
      <div className='center-container'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          {/* <Route exact path='/about' element={<About />} /> */}
          <Route exact path='/products' element={<Product />} />
          <Route path='/product/details/:id' element={<ProductDetails />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/registration' element={<SignUp />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/special-products' element={<SpecialProducts />} />
          <Route path='/product-details' element={<ProductDetails />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/my-account/*' element={<MyAccounts />} />
        </Routes>
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
