
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import SideCart from './components/SideCart/SideCart'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {


  const [watchTime, setWatchTime] = useState("")

  // local storage 
  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'));
    if (previousWatchTime) {
      const sum = previousWatchTime + time
      localStorage.setItem('watchTime', sum)
      setWatchTime(sum)
    }
    else {
      localStorage.setItem('watchTime', time)
      setWatchTime(time)
    }
  }



  return (

    <div className="App">
      <Header></Header>

      <div className='flex flex-col-reverse md:grid grid-cols-12 mt-20 mb-20 gap-5 '>

        <div className='col-span-8 p-0'>
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>

        <div className='col-span-4 card border border-info mt-10 md:mt-0 h-fit md:sticky top-0'>
          <SideCart watchTime={watchTime}></SideCart>
        </div>


      </div>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
