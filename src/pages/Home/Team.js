import './TeamCard.css';
import Section_Title from '../../components/Title';
import { Executive_Team, Design_Team, Content_Team, Outreach_Team, Alumni_Team, Finance_Team, Tech_Team, Startup_Team, Events_Team } from "./TeamData";
import TeamCard from "./TeamCard";
import { Fade, Zoom } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';

const Team = () => {
  return (
    <div className='team_page'>

        <Section_Title title="Executive Team" />
        <div className="group-set">
          {
            Executive_Team.map((Member) => {
              return (
                <TeamCard key={Member.index} props={Member} />
              )
            })
          }
        </div>

        <Section_Title title="Design Team" />
      <div className="group-set">
        {
          Design_Team.map((Member) => {
            return (
              <TeamCard key={Member.index} props={Member} />
            )
          })
        }
      </div>

        <Section_Title title="Content Team" />
      <div className="group-set">
        {
          Content_Team.map((Member) => {
            return (
              <TeamCard key={Member.index} props={Member} />
            )
          })
        }
      </div>

        <Section_Title title="Outreach Team" />
      <div className="group-set">
        {
          Outreach_Team.map((Member) => {
            return (
              <TeamCard key={Member.index} props={Member} />
            )
          })
        }
      </div>

        <Section_Title title="Alumni Team" />
      <div className="group-set">
        {
          Alumni_Team.map((Member) => {
            return (
              <TeamCard key={Member.index} props={Member} />
            )
          })
        }
      </div>

        <Section_Title title="Finance Team" />
      <div className="group-set">
        {
          Finance_Team.map((Member) => {
            return (
              <TeamCard key={Member.index} props={Member} />
            )
          })
        }
      </div>

        <Section_Title title="Technical Team" />
      <div className="group-set">
        {
          Tech_Team.map((Member) => {
            return (
              <TeamCard key={Member.index} props={Member} />
            )
          })
        }
      </div>

        <Section_Title title="Startup Team" />
      <div className="group-set">
        {
          Startup_Team.map((Member) => {
            return (
              <TeamCard key={Member.index} props={Member} />
            )
          })
        }
      </div>

        <Section_Title title="Event Management Team" />
      <div className="group-set">
        {
          Events_Team.map((Member) => {
            return (
              <TeamCard key={Member.index} props={Member} />
            )
          })
        }
      </div>


    </div>
  );
}

export default Team;