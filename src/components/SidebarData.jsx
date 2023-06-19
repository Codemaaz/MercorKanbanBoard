import React from "react";
import Home from "../Images/home.svg";
import Message from "../Images/message.svg";
import Task from "../Images/task.svg";
import Members from "../Images/user2.svg";
import Setting from "../Images/setting.svg";


export const SidebarData = [

  {
    icon: <img src={Home} alt="" />,
    name: "Home",
    link: "/home",
  },
  {
    icon: <img src={Message} alt="" />,
    name: "Messages",
    link: "/messages",
  },
  {
    icon: <img src={Task} alt="" />,
    name: "Tasks",
    link: "/tasks",
  },
  {
    icon: <img src={Members} alt="" />,
    name: "Members",
    link: "/members",
  },
  {
    icon: <img src={Setting} alt="" />,
    name: "Setting",
    link: "/setting",
  },
];
