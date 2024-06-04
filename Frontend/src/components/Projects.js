import React from 'react';
import '../style/projects.css';

function Projects() {
  return (
    <div className="projects-container">
       <div className="world-changing-container">
      <h1 className="world-changing-title">WORLD CHANGING</h1>
      <h1 className="world-changing-title">EFFORTS</h1>
      <div className="world-image">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '75%' }}></div>
        </div>
        <div className="progress-text">75%</div>
      </div>
    </div>
    <div>
    <div className='project_maker_main'>
    <div className='project_maker'>
      <img src={require('../assets/project_man.png')} width={400}/>
      
    </div>
    <div>
    <h4>Manager of the projects world wide</h4>
      <p>The standard Lorem Ipsum passage, used since the 1500s</p>

    </div>
    </div>
    
    </div>
    <div className='projects_container'>
  
      <div className='projects_container1'>
        <h4>AI ML Development with Advanced technology</h4>
        <p>AI and ML development with advanced technology is at the forefront of innovation, driving advancements in various industries such as healthcare, finance, e-commerce, cybersecurity, and autonomous systems. It empowers organizations to unlock new opportunities, improve efficiency, and deliver intelligent solutions that meet the evolving needs of users and businesses p</p>
        <div className='btn_project'>View detials</div>
      </div>
      <div className='projects_container1'>
        <h4>AI ML Development with Advanced technology</h4>
        <p>AI and ML development with advanced technology is at the forefront of innovation, driving advancements in various industries such as healthcare, finance, e-commerce, cybersecurity, and autonomous systems. It empowers organizations to unlock new opportunities, improve efficiency, and deliver intelligent solutions that meet the evolving needs of users and businesses p</p>
        <div className='btn_project'>View detials</div>
      </div>
      <div className='projects_container1'>
        <h4>AI ML Development with Advanced technology</h4>
        <p>AI and ML development with advanced technology is at the forefront of innovation, driving advancements in various industries such as healthcare, finance, e-commerce, cybersecurity, and autonomous systems. It empowers organizations to unlock new opportunities, improve efficiency, and deliver intelligent solutions that meet the evolving needs of users and businesses p</p>
        <div className='btn_project'>View detials</div>
      </div>
      
    </div>

    
    </div>
  );
}

export default Projects;