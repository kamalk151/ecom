import Address from './Address'
import CartItems from './CartItems'
import PaymentMethod from './PaymentMethod'
import { useGetCartItems } from '../ProductDetails/hooks'
import locale from '../Config/lang'
import CurrencyIcon from '../CommonComponent/CurrencyIcon'
const Checkout = () => {
  const cartItems = useGetCartItems()
  
  let qty = '0'
  let price = '0.00'
  cartItems.forEach(item => {
    qty = +item.qty + +qty
    price = +item.totalPrice + +price
  })

  return (
    <div className='center_content mt-3' id='checkout'>
      {
        cartItems.length > 0 ? (
          <>
            <div className='left-checkout-info'>
              <CartItems CurrencyIcon={ CurrencyIcon } items={cartItems} />
              <Address />
              <PaymentMethod />
            </div>
            <div className='rigth-checkout-info border-left'>
              <div className='order-info'>
                <div className='center_title_bar text-center mb-1'>
                  {locale.orderInfo}
                </div>
                <div className='order-amount-brief'>
                  <p className=''>{locale.totalSelectedProducts}: 
                    <span className=''> {cartItems.length} </span></p>
                  <p className=''>{locale.totalQty}: 
                    <span className=''> { qty } </span></p>
                  <p className=''>{locale.totalPrice}: 
                    <span className=''><CurrencyIcon />{ price * qty } </span></p>
                  <p className=''>{locale.shippingCharge}: 
                    <span className=''>
                      <CurrencyIcon />30.00
                    </span>
                  </p>
                  <p className=''>
                    {locale.discount}: 
                    <span className=''>
                      <CurrencyIcon />
                      {locale.totalPrice}
                    </span>
                  </p>
                </div>
                <div className='center_title_bar text-center'>
                  {locale.totalAmount}: 
                  <span className='price'><CurrencyIcon />330.00</span>
                </div>
              </div>
            </div>
          </>
        ) : 
          <>
            <div className='mt-3 emptyCart'>
              <h3 > Ohh! Cart is empty.
                <p> Click here to continue shopping! </p>
              </h3>
            </div></>
      }
    </div>
  )
}

export default Checkout
