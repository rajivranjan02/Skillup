import React, { useState } from 'react';
import '../Chat_Style/ChatLogin.css';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../firebase'; // Import your Firebase configuration

function ChatLogin() {
  

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='Logo'>Skillup Chat</span>
        <form >
          <input
            name='mobile'
            type='tel'
            placeholder='Phone number'
           
          />
          <div id='recaptcha'></div>
          <div className='submit_btn' type='submit'>Send OTP</div>
        </form>
        <form >
          <input
            type='text'
            name='otp'
            placeholder='Enter OTP'
           
          />
          <div className='submit_btn' type='submit'>Verify OTP</div>
        </form>
      </div>
    </div>
  );
}

export default ChatLogin;
