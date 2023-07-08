import React from "react";
import style from "./Massage.module.css";

export default function Massage() {
  return (
    <div className={
      style.massage
      //  ||
      // style.owner
      }>
      <div className={style.msgInfo}>
        <img
          src="https://cdn.pixabay.com/photo/2022/08/19/17/46/free-romantic-boy-cute-boy-images-7397403_1280.jpg"
          alt=""
          className={style.img}
        />

        <span>just now</span>
      </div>
      <div className={
        style.msgContent
        //  || 
        // style.ownerMsgContent
        }>
        <p>Hello</p>
        <img
          src="https://cdn.pixabay.com/photo/2022/08/19/17/46/free-romantic-boy-cute-boy-images-7397403_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
