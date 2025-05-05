import { useState } from 'react'
import{ BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './components/Routes'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <div>
        <Router>
          <Sidebar/>
          <AppRoutes />
        </Router>
      </div>
    </>
  )
}

export default App
