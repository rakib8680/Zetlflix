import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import SideCart from './components/SideCart/SideCart'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <Header></Header>

      <div className=' grid grid-cols-12 mt-20 mb-20 gap-5'>

        <div className='col-span-8 card card-normal border'>
          <Home></Home>
        </div>

        <div className='col-span-4 card border'>
          <SideCart></SideCart>
        </div>

      </div>

      <Footer></Footer>
    </div>
  )
}

export default App
