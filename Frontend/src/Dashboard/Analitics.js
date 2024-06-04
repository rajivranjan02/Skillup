import React from 'react';
import '../Dash_Style/Analytics.css'
import Linegraph from './Linegraph';
import Radarchat from './Radarchat';

function Analytics() {
  return (
    <div className='analytics_main'>
      <h1>Analytics</h1>
      <div className="graphs-wrapper">
        <Linegraph/>
        <Radarchat/>
      </div>
    </div>
  )
}

export default Analytics;
