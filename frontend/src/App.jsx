import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserAppointment from './pages/UserAppointment'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <BrowserRouter>
    <header className='flex justify-between items-center'>
      <div>
      <Link to="/" ><h1>DOC<span>POINT</span></h1></Link>
      </div>
      <div>
      <Link to="/" ><h1>Home</h1></Link>
      <Link to="/appointments" ><h1>My Appointments</h1></Link>
      <Link to="/login" ><Button>Login</Button></Link>
      

      </div>
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