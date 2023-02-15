import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
//pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'


const App = () => {

  return (
    <div className="App">
      <Navbar/>
      <div className="pages">
        <Routes>
          <Route 
          path='/'
          element={<Home/>}
          />
        </Routes>
      </div>
      
    </div>
  )
}

export default App
