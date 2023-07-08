import React from 'react'
import style from './SearchBar.module.css'

export default function SearchBar() {
  return (
    <div className={style.mainDiv}>
      <div className={style.searchField}>
       <input placeholder='Find Friend' type="text" />
      </div>
        <hr />
      <div className={style.userChat}>
      <img src="https://cdn.pixabay.com/photo/2022/08/19/17/46/free-romantic-boy-cute-boy-images-7397403_1280.jpg" alt="" />
        <div className={style.userChatInfo}>
          <span>Shivam</span>
        </div>
      </div>
    </div>
  )
}
