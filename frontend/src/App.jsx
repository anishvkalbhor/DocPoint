import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserAppointment from './pages/UserAppointment'
import LoginPage from './pages/LoginPage'
import { Home, Calendar, LogIn } from 'lucide-react'

const App = () => {
  return (
    <BrowserRouter>
    <header className='flex justify-between items-center bg-gray-100 p-4 shadow-md'>
      <div className='flex items-center'>
        <Link to="/" className='text-2xl font-bold'>
          <span className='text-blue-600'>DOC</span>
          <span className='text-gray-800'>POINT</span>
        </Link>
      </div>
      <nav>
        <ul className='flex space-x-6 items-center'>
          <li>
            <Link to="/" className='flex items-center text-gray-600 hover:text-blue-600 transition-colors'>
              <Home className='mr-2' size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/appointments" className='flex items-center text-gray-600 hover:text-blue-600 transition-colors'>
              <Calendar className='mr-2' size={20} />
              <span>My Appointments</span>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <Button className='flex items-center bg-blue-600 hover:bg-blue-700 text-white'>
                <LogIn className='mr-2' size={20} />
                <span>Login</span>
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/appointments" element={<UserAppointment/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App