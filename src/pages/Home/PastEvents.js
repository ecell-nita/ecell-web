import './PastEvents.css'
import Event from "./../../assets/Past Events/Vector.png";
import Speaker from "./../../assets/Past Events/Speaker-1.png";

const PastEvents = () => {
  return (
    <>
      <div className="events-wrapper">
        <img className="events-image" src={Event} alt="" />
        <div className="events-details">
          <div className="events-content">
            <h3 className="events-title">Speaker Session <a href="#" target="_blank"><i class="fa-brands fa-youtube" /></a></h3>
            <h4 className="events-date-time">
              <i class="fa-solid fa-calendar-minus" />&nbsp;
              Jan 01, 2021
              &nbsp;&nbsp;&nbsp;
              <span className="date-time-gap"><br/></span>
              <i class="fa-solid fa-clock" />&nbsp;
              05:00 PM IST
            </h4>
          </div>
          <div className="events-guest">
            <img className="guest-image" src={Speaker} alt="" />
            <h4 className="guest-title">Ashok Ramachandran</h4>
            <h3 className="guest-desgn">CEO & President</h3>
            <h3 className="guest-desgn">Schindler India</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default PastEvents;