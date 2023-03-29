
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import SideCart from './components/SideCart/SideCart'

function App() {


  const handleWatchTime = (watchTime) => {
    console.log(watchTime)
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
