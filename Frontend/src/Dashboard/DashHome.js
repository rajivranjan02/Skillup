import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import DashNav from './DashNav';
import '../Dash_Style/DashHome.css';
import MyProfile from './MyProfile';
import AllCourse from './AllCourse';
import Mycourse from './Mycourse';
import Analitics from './Analitics';
import Calendar from './Calendar';
import ChatBot from './Chat_with_friends/ChatBot';
import Achievments from './Achievments';
import Community from './Community';
import Dashboard from './Dashboard';
import ResourceLibrary from './ResourceLibrary';
import Support from './Support';
import { signOut } from "firebase/auth";
import { IoMenu } from "react-icons/io5";
import Content from './MyCourse/Left_Div/Content';
import Right_Div from './MyCourse/Right_Div/Right_Div';
import PythonContent from './MyCourse/Left_Div/PythonContent'
import CourseHome from './MyCourse/Right_Div/CourseHome';
import SQL from './MyCourse/Left_Div/SQL';
import powerBi from './MyCourse/Left_Div/powerBi';
import QuizContent from './MyCourse/Left_Div/QuizContent';
import CertificateGenerate from './MyCourse/Left_Div/CertificateGenerate';

function DashHome() {
  const [navVisible, setNavVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const hideNav = location.pathname !== '/dashboard';
    setNavVisible(!hideNav);
  }, [location.pathname]);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <div className="admin-panel">
      <div className={`DashNav ${navVisible ? 'visible' : 'hidden'}`}>
        <DashNav />
      </div>
      <IoMenu className="menu-icon" onClick={toggleNav} />
      <div className={`Content ${!navVisible ? 'full-screen' : ''}`}>

        <Routes>
          <Route path="user/myprofile" element={<MyProfile />} />
          <Route path="user/allcourse" element={<AllCourse />} />
          <Route path="user/Mycourse" element={<Mycourse />}>
            <Route index element={<Content />} />
            <Route path="python" element={<Right_Div />}>
              <Route index element={<PythonContent />} />
            </Route>
            <Route index element={<Content />} />
            <Route path="" element={<Right_Div />}>
              <Route index element={<CourseHome />} />
            </Route>
            <Route index element={<Content />} />
            <Route path="SQL" element={<Right_Div />}>
              <Route index element={<SQL />} />
            </Route>
            <Route index element={<Content />} />
            <Route path="powerBi" element={<Right_Div />}>
              <Route index element={<powerBi/>} />
            </Route>
            <Route index element={<Content />} />
            <Route path="quiz" element={<Right_Div />}>
              <Route index element={<QuizContent/>} />
            </Route>
            <Route index element={<Content />} />
            <Route path="certificate_generate" element={<Right_Div />}>
              <Route index element={<CertificateGenerate/>} />
            </Route>
          </Route>
          <Route path="user/analitics" element={<Analitics />} />
          <Route path="user/calendar" element={<Calendar />} />
          <Route path="user/chatbot" element={<ChatBot />} />
          <Route path="user/achievements" element={<Achievments />} />
          <Route path="user/CommunityForums" element={<Community />} />
          <Route path="/user/Dashboard" element={<Dashboard />} />
          <Route path="user/resourcelibrary" element={<ResourceLibrary />} />
          <Route path="user/support" element={<Support />} />
        </Routes>
      </div>
    </div>
  );
}

export default DashHome;