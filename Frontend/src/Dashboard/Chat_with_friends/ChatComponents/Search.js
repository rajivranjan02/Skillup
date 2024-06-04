import React from 'react'
import '../Chat_Component_style/Search.css';

function Search() {
  return (
    <div className='Chat_search'>
      <input type='text' placeholder='search for a friend'/>
      <div className='Chat_list'>
      <div className='Users_chat'>
        <span className='user_dp'></span>
        <span className='user_name'>Rajiv Ranjan</span>
      </div>
      <div className='Users_chat'>
        <span className='user_dp'></span>
        <span className='user_name'>Naitik Kumar</span>
      </div>
      <div className='Users_chat'>
        <span className='user_dp'></span>
        <span className='user_name'>Soumyadip Ghosh</span>
      </div>
      <div className='Users_chat'>
        <span className='user_dp'></span>
        <span className='user_name'>Yuvraj Singh</span>
      </div>
      <div className='Users_chat'>
        <span className='user_dp'></span>
        <span className='user_name'>Avishek Bhtt</span>
      </div>
      <div className='Users_chat'>
        <span className='user_dp'></span>
        <span className='user_name'>Mihir Sardar</span>
      </div>
      </div>
    </div>
  )
}

export default Search