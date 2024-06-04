import React from 'react'
import '../Chat_Component_style/Chatnavbar.css'
import Search from './Search'

function ChatNavbar() {
  return (
    <div>
      <nav className='Chat_navbar1'>
        <span className='logo'> Skillup Chat</span>
        <div className='user'>
          <img src=''></img>
          <span>Bappa</span>
          <div className='Chat_logout'>Logout</div>
        </div>
      </nav>
      <Search/>

    </div>
  )
}

export default ChatNavbar