import './Team.css'
import img from "./../../assets/Kartikeya-Singh.jpeg";
import Section_Title from '../../components/Title';

const Team = () => {
  return (
    <>
      <Section_Title title="Executive Team" />
      <div className="group-set">
        <div className="card-wrapper">
          <img src={img} alt="" />
          <div className="card-content">
            <h3>Rajkhush Kumar</h3>
            <h4>President</h4>
            <i class="fab fa-linkedin" />
          </div>
        </div>
        <div className="card-wrapper">
          <img src={img} alt="" />
          <div className="card-content">
            <h3>Rajkhush Kumar</h3>
            <h4>President</h4>
            <i class="fab fa-linkedin" />
          </div>
        </div>
        <div className="card-wrapper">
          <img src={img} alt="" />
          <div className="card-content">
            <h3>Rajkhush Kumar</h3>
            <h4>President</h4>
            <i class="fab fa-linkedin" />
          </div>
        </div>
      </div>

      <div className="group-set">
        <div className="card-wrapper">
          <img src={img} alt="" />
          <div className="card-content">
            <h3>Rajkhush Kumar</h3>
            <h4>President</h4>
            <i class="fab fa-linkedin" />
          </div>
        </div>
        <div className="card-wrapper">
          <img src={img} alt="" />
          <div className="card-content">
            <h3>Rajkhush Kumar</h3>
            <h4>President</h4>
            <i class="fab fa-linkedin" />
          </div>
        </div>
        <div className="card-wrapper">
          <img src={img} alt="" />
          <div className="card-content">
            <h3>Rajkhush Kumar</h3>
            <h4>President</h4>
            <i class="fab fa-linkedin" />
          </div>
        </div>
      </div>


      <div className="group-set">
        <div className="card-wrapper">
          <img src={img} alt="" />
          <div className="card-content">
            <h3>Rajkhush Kumar</h3>
            <h4>President</h4>
            <i class="fab fa-linkedin" />
          </div>
        </div>
        <div className="card-wrapper">
          <img src={img} alt="" />
          <div className="card-content">
            <h3>Rajkhush Kumar</h3>
            <h4>President</h4>
            <i class="fab fa-linkedin" />
          </div>
        </div>
        <div className="card-wrapper">
          <img src={img} alt="" />
          <div className="card-content">
            <h3>Rajkhush Kumar</h3>
            <h4>President</h4>
            <i class="fab fa-linkedin" />
          </div>
        </div>
      </div>


    </>
  );
}

export default Team;