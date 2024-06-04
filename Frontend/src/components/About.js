import React from 'react'
import '../style/about.css'

function About() {
  return (
    <div className="about-container">
      <div>
      <img src={require('../assets/aboutus.jpg')} loading='lazy'></img>
      </div>
      <div className='about_text'>
        <h2>Trusted Worldwide E-Platform</h2>
        <div className='about_div'>
          <div className='about_journey'>
            

          </div>
          <div className='about_div_back'>
            <h5>welcome to our journey</h5>
            <p>since 2002 our platform is marked as the best quality provider</p>
            <div className='button_about'>Learn more </div>

          </div>

        </div>

      </div>
    
  </div>
  )
}

export default About;