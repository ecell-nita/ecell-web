import './App.css';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Team from "./pages/Home/Team";
import Footer from "./../src/components/Footer";
import EventsTimeLine from "./pages/Home/EventsTimeLine";
function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/team" exact element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <EventsTimeLine />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
