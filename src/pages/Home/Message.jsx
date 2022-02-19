import React from "react";
import Section_Title from "../../components/Title";
import "./Message.css";
import sumandeb from "./../../assets/ecellimages/suman-deb.png"


export default function Message() {
  return (
    <>
      <Section_Title title={"Our Faculty Advisor"} />
      <div className="message-wrapper">
          <div className="message-faculty">
              <img src={sumandeb} alt="" />
              <p className="faculty-name">Dr. Suman Deb</p>
              <p className="faculty-desgn">Chairman & Faculty Advisor</p>
              <p className="faculty-desgn">Institute Innovation Cell & E-Cell</p>
          </div>
          <div className="message-content">
              <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam hic ducimus, excepturi optio ipsa eaque inventore, laboriosam cupiditate nesciunt a earum omnis quo? Dolorem consectetur aut reprehenderit earum fugiat obcaecati saepe. Totam eaque consequuntur neque cumque aperiam vitae non, laboriosam nam animi odio repellendus aliquam autem, quibusdam aut earum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro esse explicabo quae dolore vitae quibusdam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, vero.</p>
          </div>
      </div>
    </>
  );
}
