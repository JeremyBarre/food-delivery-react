import { Routes, Route } from 'react-router-dom'
import Auth from '../pages/Auth'
import Home from '../pages/Home'
import Restaurant from '../pages/Restaurant'
import Restaurants from '../pages/Restaurants'

function Navigator () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='restaurants' element={<Restaurants />} />
      <Route path='restaurant/:id' element={<Restaurant />} />
      <Route path='auth' element={<Auth />} />
    </Routes>
  )
}

export default Navigator
