import React from 'react'
import '../style/footer.css';
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div className='footer_main_div'>
      <h4>Our Global office</h4>
      <div className='footer_main_div1'>
      <div>
        <img src={require('../assets/footer1.jpg') } alt='img1' width={200}></img>
      </div>
      <div>
      <img src={require('../assets/footer2.jpg') } alt='img2' width={200}></img>
      </div>

      <div>
      <img src={require('../assets/footer3.jpeg') } alt='img3' width={200}></img>
      </div>
      <div><img src={require('../assets/footer4.jpg') } alt='img4' width={200}></img>

      </div>
      <div> 
      <img src={require('../assets/footer5.jpg') } alt='img5' width={220}></img>
      </div>
      <div>
      <img src={require('../assets/footer6.jpg') } alt='img6' width={200}></img>
      </div>

      </div>
      <div className='footer_main_div2'>
      <div className='icon_social'>
      <div className='icon_social1'>
      <SocialIcon url="https://linkedin.com/in/couetilc" />
      </div>
      <div className='icon_social1'>
      <SocialIcon url="https://facebook.com/in/couetilc" />
      </div>
      <div className='icon_social1'>
      <SocialIcon url="https://instagram.com/in/couetilc" />
      </div>
      <div className='icon_social1'>
      <SocialIcon url="https://twitter.com/in/couetilc" />
      </div>
      <div className='icon_social1'>
      <SocialIcon url="https://github.com/in/couetilc" />

      </div>
      <div className='icon_social1'>
      <SocialIcon url="https://google.com/in/couetilc" />
      </div>
      </div>
      <div>
      <p>© 2024 Copyright: Skillup.com.org</p>
      </div>

      </div>
      
      
    </div>
  )
}

export default Footer