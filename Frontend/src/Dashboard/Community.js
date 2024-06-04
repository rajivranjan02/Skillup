import React from 'react'
import '../Dash_Style/Community.css'

function Community() {
  return (
    <div className='community_main'>
      <div className='community_nav'>
        <h2>Skillup Community Portal</h2>
        <p>large scale, high yield return policy</p>
        <div className='button_Communinty2'> 
          <div className='create_btn'>Create next</div>
          <div className='create_btn'> buy fire</div>
        </div>
      </div>
      <div className='amount_balance'>
        <div>
          <p>Treasury Balance</p>
          <h4>$10,34,345</h4>
        </div>
        <div>
        <p>Current total Investment</p>
          <h4>$3,34,345</h4>
        </div>
        <div>
        <p>Number of Students</p>
          <h4>89,345</h4>
        </div>
      </div>
      <div className='grow_skills'>
        <div className='grow_skills1'>
          <h4>How does your skill grow?</h4>
          <p>Your skills grow through continuous learning and updates from OpenAI. The more interactions and varied topics you encounter, the better you become at understanding and responding to a wide range of queries and tasks. Additionally, feedback from users like you helps refine and improve your responses over time.</p>
        </div>
        <div className='communityImg'>
        <img src={require('../assets/community.jpg')} alt='community' />
        </div>
      </div>
      <div>
        <div className='footer_text_community'>
        <h4>Start Earning Rewards</h4>
        <p>try it</p>
        </div>
        <div className='community_footer_div_3'>
        <div className='community_footer_div'>
          <h4>Buy fire</h4>
          <p>The oldest classical British and Latin writings had little or no space between words and could be written in boustrophedon</p>
        </div>

        <div className='community_footer_div'>
        <h4>Buy fire</h4>
          <p>The oldest classical British and Latin writings had little or no space between words and could be written in boustrophedon</p>
        </div>
  
       
        <div className='community_footer_div'>
        <h4>Buy fire</h4>
          <p>The oldest classical British and Latin writings had little or no space between words and could be written in boustrophedon</p>
  
        </div>
        </div>
      </div>
    </div>
  )
}

export default Community