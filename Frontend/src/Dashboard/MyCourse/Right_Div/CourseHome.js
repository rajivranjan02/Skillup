import React from 'react';
import '../mycourse_style/CourseHome.css';

function CourseHome() {
  return (
    <div className='CourseHome_main'>
      <h2>Welcome to Skill-Up Academy</h2>
      <p>Your journey to mastering new skills begins here. Explore our diverse range of courses designed to enhance your knowledge and career.</p>
      
      <section className='course-categories'>
        <h3>Explore Our Courses</h3>
        <div className='categories'>
          <div className='category'>
            <img src={require('../images/1.png')}  width={140}></img>
            <div className='category_webdev'>
            <h4>Web Development</h4>
            <p>Learn HTML, CSS, JavaScript, React, and more.</p>
            </div>
          </div>
          <div className='category'>
          
            <div className='category_webdev1'>
            <h4>Data Science</h4>
            <p>Master Python, R, machine learning, and data visualization.</p>
            </div>
            <img src={require('../images/3.png')}  width={200}></img>
          </div>
          <div className='category'>
             <img src={require('../images/4.png')}  width={200}></img>
            <div className='category_webdev3'>
            <h4>Design</h4>
            <p>Get creative with courses on graphic design, UI/UX, and more.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className='testimonials'>
        <h3>What Our Students Say</h3>
        <div className='testimonial'>
          <p>"Skill-Up Academy has transformed my career! The courses are comprehensive and easy to follow."</p>
          <p>- Alex Johnson</p>
        </div>
        <div className='testimonial'>
          <p>"The instructors are top-notch. I've learned so much in such a short time."</p>
          <p>- Maria Garcia</p>
        </div>
      </section>
      
      <section className='instructors'>
        <h3>Meet Our Instructors</h3>
        <div className='instructor'>
          <h4>John Doe</h4>
          <p>Expert in web development with over 10 years of experience.</p>
        </div>
        <div className='instructor'>
          <h4>Jane Smith</h4>
          <p>Data scientist with a passion for teaching and a background in AI.</p>
        </div>
      </section>
      
      <section className='events'>
        <h3>Upcoming Events</h3>
        <ul>
          <li>Web Development Bootcamp - June 15th</li>
          <li>Data Science Webinar - June 20th</li>
          <li>Graphic Design Workshop - July 5th</li>
        </ul>
      </section>
      
      <section className='cta'>
        <h3>Get Started Today</h3>
        <button className='explore-courses-btn'>Explore Courses</button>
        <button className='sign-up-btn'>Sign Up</button>
      </section>
    </div>
  );
}

export default CourseHome;
