import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Vidio from './Pages/Vidio/Vidio'
import Sidebar from './Components/Sidebar/Sidebar'

const App = () => {

  const [sidebar,setSidebar]=useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
    
        <Route path='/' element={<Home sidebar={sidebar} />}/>
        <Route path='/video/:categoryId/:vidioId' element={<Vidio/> }/>
      </Routes>
    </div>
  )
}

export default App