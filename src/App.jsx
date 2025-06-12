import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Banner from './Components/Banner/Banner'
import Auction from './Components/Auction/Auction'
import { ToastContainer, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {

  return (
    <>
    <Navbar />
    <Banner />
    <Auction />
    <Footer/>

    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}/>
    </>
  )
}

export default App
