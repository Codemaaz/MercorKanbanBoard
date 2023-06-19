import React from "react";
import { FcCalendar } from "react-icons/fc";
import { LuMailQuestion } from "react-icons/lu";
import { CiBellOn, CiSearch } from "react-icons/ci";
import { ProfileData } from "./profileData";
import { RiArrowDropDownLine } from "react-icons/ri";

import Logo from "../Images/Group-7.svg";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Title from "./Title";

const Header = () => {
  return (
    <>
    <div className="mainHeader">
      {/* logo section  */}

      <div className="logo">
        <span className="logoImage">
          <img src={Logo} alt="logo" />
        </span>
        <h4 className="logoTitle">Project M.</h4>
        <span>
          <MdKeyboardDoubleArrowLeft className="toggle" />
          <MdKeyboardDoubleArrowRight className="toggle hide" />
        </span>
      </div>
      <div className="header">
        <div className="searchBox">
          <CiSearch className="searchIcon" />
          <input type="text" placeholder="Search for anything..." />
        </div>
        <div className="headerRight">
          <div className="headerIcons">
            <FcCalendar className="headerIcon" />
            <LuMailQuestion className="headerIcon" />
            <CiBellOn className="headerIcon" />
          </div>
          <div>
            {ProfileData.map((val, key) => {
              return (
                <div
                  className="profile"
                  key={key}
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                >
                  <div className="profileLeft">
                    <span className="userName">{val.profileName}</span>
                    <span className="userCity">{val.city}</span>
                  </div>
                  <div className="profileRight">
                    <div className="profilePic">{val.profilePic}</div>
                    <RiArrowDropDownLine className="dropDown" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
      <Title />

    </>
  );
};

export default Header;
