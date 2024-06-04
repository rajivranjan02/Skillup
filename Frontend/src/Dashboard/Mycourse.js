import React from 'react'
import '../Dashboard/MyCourse/mycourse_style/Mycourse.css'
import Left_Div from './MyCourse/Left_Div/Left_Div'
import Right_Div from './MyCourse/Right_Div/Right_Div'

function Mycourse() {
  return (
    <div className='mycourse_main_container'>
      <Left_Div/>
      <Right_Div/>
    </div>
  )
}

export default Mycourse