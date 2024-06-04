import React from 'react'
import '../style/catagories.css'
import { NavLink } from 'react-router-dom'

function Catagories() {
  return (
    <div className="categories_container">
      <h1>Categories</h1>
      <NavLink to="/Signup">
      <div className="category-list">
        
        <div className="category-item">
        <img  className='C_img' src={require('../assets/C.programming.png')} alt="Image 1" width={330} />
          <p>Explore courses related to programming languages, web development, and software engineering.</p>
        </div>
        
        <div className="category-item">
        <img className='C_img' src={require('../assets/C.finance.png')} alt="Image 1"  width={330} />
          <p>Discover courses on graphic design, UI/UX, and creative multimedia.</p>
        </div>
        <div className="category-item">
        <img className='C_img' src={require('../assets/C.business.png')} alt="Image 1" width={330} />
          <p>Learn about entrepreneurship, management, marketing, and finance.</p>
        </div>
        <div className="category-item">
        <img className='C_img' src={require('../assets/C.graphic.png')} alt="Image 1" width={330} />
          <p>Learn about entrepreneurship, management, marketing, and finance.</p>
        </div>
        <div className="category-item">
        <img className='C_img' src={require('../assets/C.engineering.png')} alt="Image 1" width={330} />
          <p>Learn about entrepreneurship, management, marketing, and finance.</p>
        </div>
        <div className="category-item">
        <img className='C_img' src={require('../assets/C.marketing.png')} alt="Image 1" width={330} />
          <p>Learn about entrepreneurship, management, marketing, and finance.</p>
        </div>
        {/* Add more categories as needed */}
      </div>
      </NavLink>
    </div>
  )
}

export default Catagories