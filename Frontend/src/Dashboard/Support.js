import React from 'react'
import '../Dash_Style/Support.css'

function Support() {
  return (
    <div className="support_main">
      <h2> Skillup Support</h2>
      <form>
        <input type="gmail" placeholder="Gmail"/>
        <input type="name" placeholder="Name"/>
        <input type="number" placeholder="Phone number"/>
        <input type="text" placeholder="Address"/>
        <input type="text" placeholder="Your opinion"/>
        
      </form>
      <div type='submit' className='btn_support'>Submit</div>
    </div>

  )
}

export default Support