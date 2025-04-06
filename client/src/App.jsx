import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Search from './pages/Search';
import Clubs from './pages/Clubs';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Header from './assets/components/Header';

export default function App() {
  return (
    <BrowserRouter>
      
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/club' element={<Clubs />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        </BrowserRouter>
  )
}
