import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import ChatRegister from './ChatRegister';
import ChatLogin from './ChatLogin';
import ChatHome from './ChatHome';

function ChatBot() {
  

  return (
    <div>
      <ChatRegister/>

    </div>
  );
}

export default ChatBot;
