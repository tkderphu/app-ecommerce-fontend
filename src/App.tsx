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
import ShopDetailsComponent from './page/product/detail-product/ShopDetailsComponent'
import ChatSupportComponent from './page/realtime/ChatSupportComponent'
import LiveStreamPageComponent from './page/realtime/LivestreamComponent'
import CartPageComponent from './page/trade/cart/CartComponent'
import CheckoutPageComponent from './page/trade/order/CheckoutPageComponent'
import OrderDetailsComponent from './page/trade/order/orderdetails/OrderDetailsComponent'
import OrderLogPageComponent from './page/trade/order/orderlog/OrderLogComponent'
import OrderSimpleComponent from './page/trade/order/OrderSimpleComponent'
import UserProfileComponent from './page/user/UserProfileComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom";function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomeComponent />} />
          <Route path="shop" element={<ShopComponent />} />
          <Route path='product/:id' element={<ShopDetailsComponent/>}></Route>
          <Route path='login' element={<LoginPageComponent></LoginPageComponent>}></Route>
          <Route path='register' element={<RegisterPageComponent/>}></Route>
          <Route path='forget-password' element={<ForgetPageComponent/>}></Route>
          <Route path='cart' element={<CartPageComponent/>} />
          <Route path='profile' element={<UserProfileComponent/>}/>
          <Route path='checkout' element={<CheckoutPageComponent/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
