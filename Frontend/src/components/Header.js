import React from 'react'
import { SlArrowDownCircle } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import { FaClock } from "react-icons/fa6";

import '../style/header.css'
import { NavLink } from 'react-router-dom';

function header() {
  return (
    <div className='advantages_1st'>
        <h3>Get the Skillup's advantage</h3>
        <div className='header_image'>
        <div className='header_image1'>
        <img src={require('../assets/header1.jpg')} alt="Image 1" width={300} />
        <h4>Conceptual clarity through visualisation</h4>
      </div>
      <div>
        <img src={require('../assets/header2.jpg')} alt="Image 2"  width={300}/>
        <h4>persolan learning programs</h4>
      </div>
      <div>
        <img src={require('../assets/header3.jpg')} alt="Image 3" width={300} />
        <h4>Unmatched individual attention</h4>
      </div>
        </div>
        <h3>Our students and parents love us</h3>
        <div className='ratings'>
          <li>
            <SlArrowDownCircle  id='icon' />
            <h4>200+</h4>
            <p>downloads</p>
            
          </li>
          <li>
            <FaLocationDot id='icon'/>
            <h4>100+ cities</h4>
            <p>Worldwide</p>
          </li>
          <li>
            <IoIosStarOutline id='icon'/>
            <h4>4.5 Star</h4>
            <p>app rating</p>
          </li>
          <li>
            <FaClock id='icon'/>
            <h4>30 min avg.</h4>
            <p>time spent daily</p>
          </li>

        </div>
        <div className='courses_main'>
  <h6>Recommended courses for you</h6>
  <div className='course_suggetion'>
    <div className='course_suggetion_wrapper'>
      <div className='course_suggetion_div'>
        <img src={require('../assets/DATASCIENCE3.png')} width={300} alt="Course 1" />
      </div>
      <div className='course_suggetion_div'>
        <img src={require('../assets/DATASCIENCE2.png')} width={300} alt="Course 2" />
      </div>
      <div className='course_suggetion_div'>
        <img src={require('../assets/DATASCIENCE1.png')} width={300} alt="Course 3" />
      </div>
      <div className='course_suggetion_div'>
        <img src={require('../assets/DATASCIENCE.png')} width={300} alt="Course 4" />
      </div>
      <div className='course_suggetion_div'>
        <img src={require('../assets/DATASCIENCE3.png')} width={300} alt="Course 1" />
      </div>
      <div className='course_suggetion_div'>
        <img src={require('../assets/DATASCIENCE2.png')} width={300} alt="Course 2" />
      </div>
      <div className='course_suggetion_div'>
        <img src={require('../assets/DATASCIENCE.png')} width={300} alt="Course 4" />
      </div>
      <div className='course_suggetion_div'>
        <img src={require('../assets/DATASCIENCE1.png')} width={300} alt="Course 4" />
      </div>
      <div className='course_suggetion_div'>
        <img src={require('../assets/DATASCIENCE3.png')} width={300} alt="Course 1" />
      </div>
    </div>
  </div>
</div>
        <NavLink to="/Signup">
        <button className="learn-more">
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span className="button-text">Explore More</span>
</button>
        </NavLink>




    </div>
  )
}

export default header