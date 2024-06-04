import React from 'react';
import '../mycourse_style/rightdiv.css';
import { Route, Routes } from 'react-router-dom';
import PythonContent from '../Left_Div/PythonContent';
import CourseHome from './CourseHome';
import SQL from '../Left_Div/SQL';
import powerBi from '../Left_Div/powerBi';
import QuizContent from '../Left_Div/QuizContent';
import CertificateGenerate from '../Left_Div/CertificateGenerate';


function Right_Div() {
  return (
    <div className='right_Div_container'>
      <Routes>
        <Route path="python" element={<PythonContent />} />
        <Route path="" element={<CourseHome />} />
        <Route path="SQL" element={<SQL />} />
        <Route path="powerBi" element={<powerBi/>} />
        <Route path="quiz" element={<QuizContent/>} />
        <Route path="certificate_generate" element={<CertificateGenerate/>} />
      </Routes>


      
    </div>
  );
}

export default Right_Div;