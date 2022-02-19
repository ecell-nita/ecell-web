import './App.css';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Team from "./pages/Home/Team";
import Contact from "./pages/Home/Contact";
import Footer from "./../src/components/Footer";
import EventsTimeLine from "./pages/Home/EventsTimeLine";
import Testimonials from './pages/Home/Testimonials';
import PastEvents from './pages/Home/PastEvents';
import ParticleBackground from './components/particleBackground';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/team" exact element={<Team />} />
        <Route path="/events" exact element={<><EventsTimeLine /> <PastEvents /></>} />
        <Route path="/testimonials" exact element={<Testimonials />} />
        <Route path="/contact-us" exact element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
