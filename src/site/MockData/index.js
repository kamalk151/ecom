import favImg from '../Assets/img/favorites.gif'
import startImg from '../Assets/img/favs.gif'
import cartImg from '../Assets/img/cart.gif'
import laptopImg from '../Assets/img/laptop.png'
import mobile from '../Assets/img/p4.gif'
import machine from '../Assets/img/p5.gif'
const productImg = [laptopImg, mobile, machine]
const productBrand = ['apple', 'lenovo', 'samsung']
const productType = ['special', 'latest']

export const getProductData = (length=60) => {
  const prodData = []
  for (let i = 0; i < length; i++) {
    const imgIndx = Math.floor(Math.random() * productImg.length)
    prodData.push({
      cartImg: cartImg,
      favImg: favImg,
      starImg: startImg,
      productImg: productImg[imgIndx],
      price: 270 + i,
      discount: 10 + imgIndx,
      totalPrice: 10 + i,
      productName: 'Motorola 156 MX-VL270 29' + i,
      productId: 'prod_' + i,
      productType: productType[imgIndx % 2],
      qty: 1+i,
      productBrand: productBrand[imgIndx],
      manufacturer: 'India',
      title: 'My Cinema-U3000/DVBT, USB 2.0 TV BOX External, White'
    })
  }
  return prodData
}

export const filter = [{
  label: 'Apple',
  id: '',
  key: 'apple',
  class: ''
},{
  label: 'Sony',
  id: '',
  key: 'sony',
  class: ''
},{
  label: 'RedMi',
  id: '',
  key: 'red-mi',
  class: ''
},{
  label: 'Nokia',
  id: '',
  key: 'nokia',
  class: ''
},{
  label: 'Samsung',
  id: '',
  key: 'samsung',
  class: ''
},{
  label: 'OPPO',
  id: '',
  key: 'oppo',
  class: ''
},{
  label: 'Lenovo',
  id: '',
  key: 'lenovo',
  class: ''
}]
