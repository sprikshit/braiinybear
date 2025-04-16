import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Overview from './pages/about/Overview'
import OurPeople from './pages/about/OurPeople'
import Contact from './pages/ContactUs'
import Gallery from './pages/Gallery'

function App() {

  return (
    <>
        <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/about/our-people" element={<OurPeople />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/our-people" element={<OurPeople />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App
