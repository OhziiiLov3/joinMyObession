import { Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import About from './screens/About'
import Classes from './screens/Classes'
import LandingCarousel from "./components/LandingCarousel"
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'


function App() {
  return (
    <Router>
      <Header />
      <main className="py-5">
        <Container>
          <LandingCarousel />
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/classes" element={<Classes />} exact />
            <Route path="/training/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Testimonials />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
