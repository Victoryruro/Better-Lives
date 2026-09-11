import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 
import Home from './Pages/Home'
// import Job from './Pages/Job'
// import Company from './Pages/Company'
import About from './Pages/About'
// import Pricing from './Pages/Pricing'
// import BlogPost from './Component/BlogPage/BlogPost'
import Contact from './Pages/Contact'
// import Blog from './Pages/Blog'
import './App.css'

import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import ScrollToTop from './Components/ScrollToTopEffect'
import ScrollProgress from './Components/ScrollProgress'
import Program from './Components/HomepageComponents/Programs'
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
