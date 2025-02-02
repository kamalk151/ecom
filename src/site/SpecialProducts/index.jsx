import ProductFilter from '../Products/ProductFilter'
import {lazy, Suspense} from 'react'
const ProductList = lazy(() => import ('../Products/ProductsList'))
import locale from '../Config/lang'

const SpecialComponent = () => {
  return (
    <div className='product-page'>
      <div className='left-center-container'>
        <ProductFilter locale={locale} />
      </div>
      <div className='right-center-container'>
        <div className='center_content'>
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <ProductList locale={locale} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default SpecialComponent
