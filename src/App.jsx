import Navbar from './components/Navbar.jsx'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About.jsx'
import Favorites from './pages/Favorites.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/404.jsx'
import Footer from './components/Footer.jsx'

import './index.css'

function App() {
  
  return (
    < div className="App mx-auto bg-gray-900">
      <Navbar />
      <div>
        <Routes basename="/recipe-finder">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
