import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import CollectionPage from '../pages/CollectionPage'


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage/>} />
        {/* Add more routes here as needed */}
    </Routes>
  )
}

export default AppRoutes