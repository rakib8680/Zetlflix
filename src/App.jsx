
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import SideCart from './components/SideCart/SideCart'



function App() {


  // local storage 
  const handleWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'));
    if (previousWatchTime) {
      const sum = previousWatchTime + time
      localStorage.setItem('watchTime', sum)
      console.log(previousWatchTime)
    }
    else {
      localStorage.setItem('watchTime', time)
    }
  }



  return (

    <div className="App">
      <Header></Header>

      <div className=' md:grid grid-cols-12 mt-20 mb-20 gap-5'>

        <div className='col-span-8 p-0'>
          <Home handleWatchTime={handleWatchTime}></Home>
        </div>

        <div className='col-span-4 card border mt-10 md:mt-0'>
          <SideCart></SideCart>
        </div>

      </div>

      <Footer></Footer>
    </div>
  )
}

export default App
