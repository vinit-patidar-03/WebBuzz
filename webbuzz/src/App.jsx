import { useState } from 'react'
import Homepage from './components/Homepage'
import { Route, BrowserRouter as Router ,Routes} from 'react-router-dom'
import Register from './components/Register'
import Schedule from './components/Schedule'
function App() {

  return (
    <>
    <Router>
      <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/schedule" element={<Schedule/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
