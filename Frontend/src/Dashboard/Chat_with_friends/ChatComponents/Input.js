import React from 'react';
import '../Chat_Component_style/Input.css'

function Input() {
  return (
    <div className='chat_input'>
      <input  className='input_message' type='text' placeholder='type something...' />
      <div className='chat_send'>
        <input type='file'/>
      </div>
      <div className='sent_chat'>send</div>
    </div>
  );
}

export default Input;
