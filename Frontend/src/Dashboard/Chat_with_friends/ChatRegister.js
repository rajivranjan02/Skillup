import React from 'react'
import '../Chat_Style/ChatRegister.css'

function ChatRegister() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='Logo'> Skillup Chat</span>
            <form>
                <input type='name' placeholder=' display name'/>
                <input type='email1' placeholder='email'/>
                <input type='password1' placeholder='password'/>
                <input  type='file'/>
                <div className='submit_btn'>Sign up</div>
            </form>
            <p>you do have an account? Login</p>


        </div>
        
    </div>
  )
}

export default ChatRegister