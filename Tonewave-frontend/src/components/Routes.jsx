import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ExplorePage from '../pages/ExplorePage'
import ResultPage from '../pages/ResultPage'


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage/>} />
        <Route path="/search" element={<ResultPage />} />
        {/* Add more routes here as needed */}
    </Routes>
  )
}

export default AppRoutes