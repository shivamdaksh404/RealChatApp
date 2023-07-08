import React from 'react'
import style from './ChatDisplay.module.css'
import Chat from '../chat/Chat'
import Messages from '../massages/Messages'
import Input from '../input/Input'

export default function ChatDisplay() {
  return (
    <div className={style.mainContainer}>
<Chat/>
<Messages/>
<Input/>

        </div>
  )
}
