import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <BrowserRouter>
    <header>
      <Link to="/" >Home</Link>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App