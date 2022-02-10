import "./NavBar.css";
import logo from "./../assets/Logo-White.png";
import { useState } from "react";
import { Fade } from 'react-reveal';
import RubberBand from 'react-reveal/RubberBand';


const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="navbox">
        <img src={logo} alt="" />
        <div className="links-list">
          <li className="list-items">Home</li>
          <li className="list-items">Events</li>
          <li className="list-items">Gallery</li>
          <li className="list-items">Our Team</li>
          <li className="list-items">Testimonials</li>
          <li className="list-items">Contact Us</li>
        </div>
      </nav>

      <nav className="mobile-nav">
        <img src={logo} alt="Logo of Ecell" />
        <i
          onClick={() => {
            setMenu(!menu);
          }}
          className={!menu ? "fas fa-bars" : "far fa-times-circle text-3xl"}
        />
      </nav>

        <Fade top opposite>

        <div className={!menu ? "mobile-list" : "mobile-list is-active"}>
        <RubberBand cascade><li className="list-items">Home</li></RubberBand>
        <RubberBand cascade><li className="list-items">Events</li></RubberBand>
        <RubberBand cascade><li className="list-items">Gallery</li></RubberBand>
        <RubberBand cascade><li className="list-items">Our Team</li></RubberBand>
        <RubberBand cascade><li className="list-items">Testimonials</li></RubberBand>
        <RubberBand cascade><li className="list-items">Contact Us</li></RubberBand>
        </div>
      
        </Fade>
    </>
  );
};

export default NavBar;
