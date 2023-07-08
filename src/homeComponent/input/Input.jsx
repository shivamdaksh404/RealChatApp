import React from "react";
import style from "./Input.module.css";
import { TiAttachment } from "react-icons/ti";
import { RiImageAddFill } from "react-icons/ri";
import { BiSolidSend } from "react-icons/bi";

export default function Input() {
  const iconStyle = {
    cursor: "pointer",
  };
  return (
    <>
      {/* <hr /> */}
      <div className={style.mainDiv}>
        <input type="text" placeholder="Type Somethings..." />
        <div className={style.iconDiv}>
          <TiAttachment size={30} style={iconStyle} />
          <RiImageAddFill size={25} style={iconStyle} />
          <BiSolidSend size={28} style={iconStyle} />
        </div>
      </div>
    </>
  );
}
