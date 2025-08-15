import Navbar from './components/Navbar.jsx'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About.jsx'
import Favorites from './pages/Favorites.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

import './index.css'

function App() {
  
  return (
    < div className="App">
      <Navbar />
      <Routes basename="/recipe-finder" style={{ marginBottom: '2rem' }}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App
