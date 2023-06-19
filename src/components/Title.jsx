import React from "react";
import "./component.css";

import { LuLink2 } from "react-icons/lu";
import { BiFilterAlt } from "react-icons/bi";
import { TbCalendar } from "react-icons/tb";
import { RiArrowDropDownLine, RiGroupLine, RiPencilLine } from "react-icons/ri";
import { CiSquarePlus } from "react-icons/ci";

import Group613 from "../Images/Group613.svg";
import Friend5 from "../Images/friend5.svg";
import Friend4 from "../Images/friend4.svg";
import Friend3 from "../Images/friend3.svg";
import Friend2 from "../Images/friend2.svg";
import Friend1 from "../Images/friend1.svg";

import App from "./kanbanBord/App"

const Title = () => {
  return (
    <>
    <div className="titleSection">
      <div className="titleLeft">
        <div className="titleLink">
          <h1>Mobile App</h1>
          <a href="/edit">
            <RiPencilLine className="penicon" />
          </a>
          <a href="/link">
            <LuLink2 className="penicon" />
          </a>
        </div>
        <div className="dropdown">
          <div className="dropDownItem">
            <BiFilterAlt />
            Filter <RiArrowDropDownLine />
          </div>
          <div className="dropDownItem">
            <TbCalendar />
            Today <RiArrowDropDownLine />
          </div>
        </div>
      </div>
      <div className="titleRight">
        <div className="inviteSection">
          <span>
            <CiSquarePlus className="proIcon" /> Invite
          </span>
          <div className="friendImage">
            <img src={Friend5} alt="friendImage" className="friendImage1" />
            <img src={Friend2} alt="friendImage" className="friendImage3" />
            <img src={Friend4} alt="friendImage" className="friendImage2" />
            <img src={Friend3} alt="friendImage" className="friendImage4" />
            <img src={Friend1} alt="friendImage" className="friendImage5" />
            <span className="friendImage5">+2</span>
          </div>
        </div>
        <div className="shearSection">
          <span className="share">
            <RiGroupLine className="shareIcon" />
            Share
          </span>
            <img src={Group613} alt="" />
        </div>
      </div>
    </div>

<App/>
      </>
  );
};

export default Title;
