import { Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { GoogleLogin } from "react-google-login";
// import axios from "axios";
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import About from './screens/About'
import Classes from './screens/Classes'
import LandingCarousel from "./components/LandingCarousel"
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'



// // Google Login
// const handleGoogleLogin = (response) => {
//   axios
//     .post(`${baseURL}/auth/convert-token`, {
//       token: response.accessToken,
//       backend: "google-oauth2",
//       grant_type: "convert_token",
//       client_id: drfClientId,
//       client_secret: drfClientSecret,
//     })
//     .then((res) => {
//       const { access_token, refresh_token } = res.data;
//       console.log({ access_token, refresh_token });
//       localStorage.setItem("access_token", access_token);
//       localStorage.setItem("refresh_token", refresh_token);
//     })
//     .catch((err) => {
//       console.log("Error Google login", err);
//     });
// };



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
