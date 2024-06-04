import React from 'react'
import '../Chat_Component_style/Chat.css'
import Input from './Input'
import Message from './Message'


function Chat() {
  return (
    <div className='chat_area'>
      <nav className='Chat_nav2'>
      <span className='Chat_header'>Soumyadip Ghosh</span>
      </nav>
      <div className='scroll_bar'>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      </div>
      

      <Input/>

      
    </div>
  )
}

export default Chat