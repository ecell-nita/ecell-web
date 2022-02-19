import "./NavBar.css";
import logo from "./../assets/Logo-White.png";
import { useState } from "react";
import { Fade } from "react-reveal";
import RubberBand from "react-reveal/RubberBand";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="navbox">
        <img src={logo} alt="" />
        <div className="links-list">
          <NavLink to="/">
            <li className="list-items">Home</li>
          </NavLink>
          <NavLink to="/events">
            <li className="list-items">Events</li>
          </NavLink>
          <NavLink to="/gallery">
            <li className="list-items">Gallery</li>
          </NavLink>
          <NavLink to="/team">
            <li className="list-items">Our Team</li>
          </NavLink>
          <NavLink to="testimonials">
            <li className="list-items">Testimonials</li>
          </NavLink>
          <NavLink to="contact-us">
            <li className="list-items">Contact Us</li>
          </NavLink>
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
          <NavLink to="/">
            <RubberBand cascade>
              <li
                onClick={() => {
                  setMenu(!menu);
                }}
                className="list-items"
              >
                Home
              </li>
            </RubberBand>
          </NavLink>
          <NavLink to="/events">
            <RubberBand cascade>
              <li
                onClick={() => {
                  setMenu(!menu);
                }}
                className="list-items"
              >
                Events
              </li>
            </RubberBand>
          </NavLink>
          <NavLink to="/gallery">
            <RubberBand cascade>
              <li
                onClick={() => {
                  setMenu(!menu);
                }}
                className="list-items"
              >
                Gallery
              </li>
            </RubberBand>
          </NavLink>
          <NavLink to="/team">
            <RubberBand cascade>
              <li
                onClick={() => {
                  setMenu(!menu);
                }}
                className="list-items"
              >
                Our Team
              </li>
            </RubberBand>
          </NavLink>
          <NavLink to="/testimonials">
            <RubberBand cascade>
              <li
                onClick={() => {
                  setMenu(!menu);
                }}
                className="list-items"
              >
                Testimonials
              </li>
            </RubberBand>
          </NavLink>
          <NavLink to="/contact-us">
            <RubberBand cascade>
              <li
                onClick={() => {
                  setMenu(!menu);
                }}
                className="list-items"
              >
                Contact Us
              </li>
            </RubberBand>
          </NavLink>
        </div>
      </Fade>
    </>
  );
};

export default NavBar;
