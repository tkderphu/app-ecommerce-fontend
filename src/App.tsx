import { useState } from 'react'
import './App.css'
import ChangePasswordPageComponent from './page/authen/ChangePasswordComponent'
import CheckCodeForgetPasswordPageComponent from './page/authen/CheckCodeForgetPasswordComponent'
import CreateNewPasswordPageComponent from './page/authen/CreateNewPasswordComponent'
import ForgetPageComponent from './page/authen/ForgetComponent'
import LoginPageComponent from './page/authen/LoginComponent'
import RegisterPageComponent from './page/authen/RegisterComponent'
import HomeComponent from './page/product/HomeComponent'
import ShopComponent from './page/product/ShopComponent'
import ShopDetailsComponent from './page/product/ShopDetailsComponent'
import ChatSupportComponent from './page/realtime/ChatSupportComponent'
import LiveStreamPageComponent from './page/realtime/LivestreamComponent'
import CartPageComponent from './page/trade/cart/CartComponent'
import CheckoutPageComponent from './page/trade/order/CheckoutPageComponent'
import UserProfileComponent from './page/user/UserProfileComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserProfileComponent/>

  )
}

export default App
