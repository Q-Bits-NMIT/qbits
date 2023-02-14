//import reactLogo from './assets/react.svg'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="container">
      {/*
        Use Bebas Neue Font
      */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
