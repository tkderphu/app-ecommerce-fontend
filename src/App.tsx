import { useState } from 'react'
import './App.css'
import HomeComponent from './page/product/HomeComponent'
import ShopComponent from './page/product/ShopComponent'
import ShopDetailsComponent from './page/product/ShopDetailsComponent'
import CartPageComponent from './page/trade/cart/CartComponent'
import CheckoutPageComponent from './page/trade/order/CheckoutPageComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CheckoutPageComponent/>

  )
}

export default App
