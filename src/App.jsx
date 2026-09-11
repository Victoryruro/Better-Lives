import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import './App.css'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import ScrollToTop from './Components/ScrollToTopEffect'
import ScrollProgress from './Components/ScrollProgress'
import ProgramPage from './Pages/Program'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <ScrollProgress/>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path='Program' element={<ProgramPage/>}/>
          <Route path="/Contact" element={<Contact />} />
          
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
