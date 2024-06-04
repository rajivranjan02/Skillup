import React from 'react'
import "../Dash_Style/Achievments.css"

function Achievments() {
  return (
    <div className='achievments_back'>
      <nav>
        <h3 className="achievments-heading">Your Achievements</h3>
      </nav>
      <div className='Achievments_Div'>
        <div className='Achievments_First'>
          <img src={require('../assets/achievments_waiting.gif')} height={160} width={160} alt="Waiting GIF" />
          <progress value={50} max={100} />
          <p>"Hey <strong>User</strong>! Hurry up and complete the course soon! 🚀🎓"</p>
        </div>
        <div className='Achievments_First'>
          <img src={require('../assets/achievments_welcome.gif')} alt="Welcome GIF" height={160} width={160} />
          <progress value={100} max={100} />
          <p>Congratulations 🎉 <strong>Rajiv</strong> on completing the data science course!</p>
        </div>
      </div>
    </div>
  )
}

export default Achievments