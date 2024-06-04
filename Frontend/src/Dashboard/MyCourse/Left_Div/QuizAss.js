import React from 'react'
import { NavLink } from 'react-router-dom';
function QuizAss() {
  return (
    <div>
     <select onChange={(e) => window.location.href = e.target.value}>
              <option value="/"><NavLink to="/">Select</NavLink></option>
              <option value="/quiz"><NavLink to="/quiz">quiz</NavLink></option>
              <option value="/assignment"><NavLink to="/assignment">assignment</NavLink></option>
      </select>
    </div>
  )
}

export default QuizAss
