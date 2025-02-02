import ProductFilter from './ProductFilter'
import {lazy, Suspense} from 'react'
// import { useState } from 'react'
const ProductList = lazy(() => import ('./ProductsList'))
import locale from '../Config/lang'

const ProductComponent = () => {

  return (
    <div className='product-page'>
      <div className='left-center-container'>
        <ProductFilter locale={locale}/>
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

export default ProductComponent
