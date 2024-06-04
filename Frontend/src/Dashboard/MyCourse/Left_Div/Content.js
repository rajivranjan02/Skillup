// Content.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../mycourse_style/content.css';
import { IoIosArrowDown } from "react-icons/io";
import QuizContent from './QuizContent';

function Content() {
  const [showCourseMaterial, setShowCourseMaterial] = useState(false);
  const [showQuizAss, setShowQuizAss] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const toggleCourseMaterial = () => {
    setShowCourseMaterial(!showCourseMaterial);
  };

  const toggleQuizAss = () => {
    setShowQuizAss(!showQuizAss);
  };

  const toggleCertificate = () => {
    setShowCertificate(!showCertificate);
  };

  return (
    <div className='content_part'>
      <div>
        <div className='Course_Material' onClick={toggleCourseMaterial}>
          <li>Course Material</li>
          <IoIosArrowDown
            className={`arrow-icon ${showCourseMaterial ? 'rotate' : ''}`}
            size={20}
          />
        </div>
        <div className={`dropdown ${showCourseMaterial ? 'show' : ''}`}>
        <li><NavLink to="python">Python</NavLink></li>
        <li><NavLink to="SQL">SQL</NavLink></li>
        <li><NavLink to="powerBi">powerBI</NavLink></li>
        </div>
      </div>
      <div>
      <div className='Course_Material' onClick={toggleQuizAss}>
        <li>Quiz and assignment</li>
        <IoIosArrowDown
          className={`arrow-icon ${showQuizAss ? 'rotate' : ''}`}
          size={20}
        />
      </div>
      <div className={`dropdown ${showQuizAss ? 'show' : ''}`}>
         <li><NavLink to='quiz'>Quiz</NavLink></li>
         

      </div>
      </div>
      <div>
      <div className='Course_Material' onClick={toggleCertificate}>
        <li>Certificate</li>
        <IoIosArrowDown
          className={`arrow-icon ${showCertificate ? 'rotate' : ''}`}
          size={20}
        />
      </div>
      <div className={`dropdown ${showCertificate ? 'show' : ''}`}>
            <li><NavLink to='certificate_generate'>Certificate Generate</NavLink></li>

      </div>
      </div>
    </div>
  );
}

export default Content;