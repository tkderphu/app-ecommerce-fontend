import { useState } from 'react'
import './App.css'
import HomeComponent from './page/product/HomeComponent'
import ShopComponent from './page/product/ShopComponent'
import ShopDetailsComponent from './page/product/ShopDetailsComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ShopDetailsComponent/>

  )
}

export default App
