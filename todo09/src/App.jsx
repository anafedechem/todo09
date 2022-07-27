import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Products from './Components/Products/Products'


function App() {

  return (
  <div className='App'>
    <Header/>
    <Main/>
    {/* <Products/> */}
    <Footer/>
  </div>
  )
}

export default App
