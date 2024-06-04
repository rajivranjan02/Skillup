import React from 'react'
import '../mycourse_style/leftdiv.css'
import Content from './Content'
function Left_Div() {
  return (
    <div className='Left_Div_container'>
        <div className="dash_logo">
        <img src={require('../../../assets/skillupLogo.png')} width={60} alt="Logo" />
        </div>
        <h3>Data Science</h3>
        <div className='mycourse_content'>
            <Content/>
        </div>

    </div>
  )
}

export default Left_Div