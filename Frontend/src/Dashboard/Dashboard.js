import React from 'react'
import '../Dash_Style/DashBoard.css';
import SearchBar from '../components/SearchBar'
import LineChart from './LineChart';

function Dashboard() {
  return (
    <div className='total_dashboard'>
    <div className='dashboard_nav'>
    <div> <SearchBar/></div>
    <div className='profile'>welcome User</div>
    </div>
    
    <div className='welcome'>
      <div className='cartoon_pic'>
      <img src={require('../assets/welcomeDashboard.png')} width={250} alt="Image 1" />
      </div>
      <div className='welcome_user_text'>
        <h2>welcome Back ! </h2>
        <p>Bappa</p>
        <p>
        "The moonlight danced on the tranquil lake, casting shimmering reflections that seemed to whisper secrets of the night. A gentle breeze carried the scent of pine, mingling with the soft rustle of leaves. It was a moment frozen in time, serene and magical."
        </p>
      </div>
    </div>
    <div className='chart_bar'>
      <div className='chart'>
        <LineChart/>
      </div>
    </div>
    
    </div>
  )
}

export default Dashboard