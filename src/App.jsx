import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <div>

      {/* Navbar always visible */}
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  )
}



export default App