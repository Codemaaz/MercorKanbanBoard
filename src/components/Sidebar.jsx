import React from "react";
import { SidebarData } from "./SidebarData";
import { ProjectData } from "./ProjectData";
import "./component.css";
// import Logo from "../Images/Group-7.svg";
// import {
//   MdKeyboardDoubleArrowLeft,
//   MdKeyboardDoubleArrowRight,
// } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { FaLightbulb } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        {/* nav icons  */}

        <ul className="sidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li
                className="row"
                key={key}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div className="icon" id="icon">
                  {val.icon}
                </div>{" "}
                <div className="name" id="name">
                  {val.name}
                </div>
              </li>
            );
          })}
        </ul>
        <hr className="sidebarHr" />

        {/* project list  */}

        <div className="myProject">
          <h4>MY PROJECTS</h4>
          <span>
            <CiSquarePlus className="proIcon" />
          </span>
        </div>
        <div className="projectList">
          {ProjectData.map((val, key) => {
            return (
              <li
                key={key}
                id={window.location.pathname == val.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div className="bullet">{val.bullet}</div>
                <div className="pname">{val.Pname}</div>
                <div className="threedot">{val.Picon}</div>
              </li>
            );
          })}
        </div>

        {/* feedback section  */}
        <div className="feedback">

          <div className="lightBackground">
            <FaLightbulb  className="lightIcon"/>
          </div>
          <div className="feedbackBorder">

          <div>
            <h4>Thoughts Time</h4>
            <p>
              We don't have any notice for you, till then you can shear your
              thoughts with your peers.
            </p>
          </div>
          <div className="input">
            <input type="text" placeholder="Write a message" />
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
