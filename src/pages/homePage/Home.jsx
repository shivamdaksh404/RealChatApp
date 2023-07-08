import React,{useEffect, useState} from 'react'
import style from './Home.module.css'
import { json, useNavigate } from 'react-router-dom'
import { isUserLoggedIn, currentUsers } from '../../atoms/Atom'
import { useRecoilState, useRecoilValue } from 'recoil'
import ChatDisplay from '../../homeComponent/chatDisplay/ChatDisplay'
import SideBarDisplay from '../../homeComponent/sideBarDisplay/SideBarDisplay'

export default function Home() {

// const [isLoggedIn, setIsLoggedIn] = useRecoilState(isUserLoggedIn)
const currentUser = useRecoilValue(currentUsers)
// let currentUser = JSON.parse(localStorage.getItem('CurrentUser'))

const navigate = useNavigate()

useEffect(()=>{
    if(currentUser.isLoggedIn===true){
        navigate('/')
    }else {
      navigate('/login')
    }
},[currentUser])
  return (
    <div className={style.mainContainer}>
      <h1>Welcome to home page</h1>
      <div className={style.container}>
      <SideBarDisplay/>
      <ChatDisplay/>
      </div>
    </div>
  )
}
