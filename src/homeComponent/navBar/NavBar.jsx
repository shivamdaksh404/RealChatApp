import React from 'react'
import style from './NavBar.module.css'

export default function NavBar() {
  return (
    <div className={style.navbar}>
        <span className={style.logo}> Chat App</span>
        <div className={style.userDiv}>
            <img src="https://cdn.pixabay.com/photo/2022/08/19/17/46/free-romantic-boy-cute-boy-images-7397403_1280.jpg" alt="" className={style.img} />
            <span>Shivam</span>
            <button>Logout</button>
        </div>

    </div>
  )
}
