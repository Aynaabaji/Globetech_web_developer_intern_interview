import React from 'react'
import './App.css'
import Home from './pages/home/Home'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Service from '../src/pages/services/Service'
import Login from '../src/pages/login/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
