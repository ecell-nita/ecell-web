import "./TeamCard.css";

const TeamCard = ({ props }) => {
  return (
    <div className="card-wrapper">
      <img src={props.image} alt={props.name} />
      <div className="card-content">
        <h3>{props.name}</h3>
        <h4>{props.post}</h4>
      </div>
      <a href={props.linkdUrl} target="_blank"><i class="team-sm fab fa-linkedin" /></a>
    </div>
  );
};

export default TeamCard;
