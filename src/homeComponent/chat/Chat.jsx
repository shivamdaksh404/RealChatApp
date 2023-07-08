import React from "react";
import style from "./Chat.module.css";
import { BiSolidVideoPlus } from "react-icons/bi";
import { HiUserAdd } from "react-icons/hi";
import { MdOutlineMoreVert } from "react-icons/md";
import { colors } from "@mui/material";
import Massages from "../massage/Massage";
import Messages from "../massages/Messages";

export default function Chat() {
  const iconStyle = {
    color: "white",
    fontSize: "25px",
  };

  return (
    <div className={style.chatHeader}>
      <div className={style.chatInfo}>
        <span>Shivam</span>
        <div className={style.chatIcons}>
          <BiSolidVideoPlus style={iconStyle} />
          <HiUserAdd style={iconStyle} />
          <MdOutlineMoreVert style={iconStyle} />
        </div>
      </div>
      {/* <Messages /> */}
    </div>
  );
}
