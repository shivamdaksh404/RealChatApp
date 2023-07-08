import React from 'react'
import style from './SideBarDisplay.module.css'
import NavBar from '../navBar/NavBar'
import SearchBar from '../searchBar/SearchBar'
import Chats from '../chats/Chats'

export default function SideBarDisplay() {
  return (
    <div className={style.mainContainer}>
        <NavBar/>
        <SearchBar/>
        <Chats/>
        </div>
  )
}
