import Navbar from './components/Navbar.jsx'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About.jsx'
import Favorites from './pages/Favorites.jsx'
import Home from './pages/Home.jsx'

import './index.css'

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  )
}

export default App
