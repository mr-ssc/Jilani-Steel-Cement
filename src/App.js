import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Footer from "./component/Footer"
import Hero from './component/Hero'
import Products_Overview from "./component/Products_Overview"






function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/Navbar' element={<Navbar />}></Route>
        <Route path='/Hero' element={<Hero />}></Route>
        <Route path='/Products_Overview' element={<Products_Overview />}></Route>


        <Route path='/Footer' element={<Footer />}></Route>
      </Routes>




    </>

  );
}

export default App