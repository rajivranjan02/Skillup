import React from 'react'
import Sidebar from './ChatComponents/Sidebar'
import Chat from './ChatComponents/Chat'
import '../Chat_Style/ChatHome.css'
import ChatLogin from './ChatLogin'

function ChatHome() {
  return (
    <div className='Chat_home'>
        <div className='chat_container'>
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}
export default ChatHome