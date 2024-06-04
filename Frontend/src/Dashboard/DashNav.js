import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Dash_Style/DashNav.css';
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdLibraryBooks } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { RiCommunityFill } from "react-icons/ri";
import { IoLibrary } from "react-icons/io5";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FcCustomerSupport } from "react-icons/fc";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";

import { IoMenu } from "react-icons/io5";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function DashNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignout = () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out successfully');
        navigate('/');
      })
      .catch((error) => {
        console.error('Signout error:', error);
      });
  };



  return (
    <nav className='dash_nav'>
      <div className="dash_container">
        <div className="dash_logo">
        <img src={require('../assets/skillupLogo.png')} width={60} alt="Logo" />
        </div>
        <div className='dash_nav-elements '>
          <ul>
            <li className='underline'>
              <MdDashboard />
              <NavLink to="user/Dashboard">Dashboard</NavLink>
            </li>
            <li className='underline'>
              <CgProfile />
              <NavLink to="user/MyProfile">My Profile</NavLink>
            </li>
            <li className='underline'>
              <MdLibraryBooks />
              <NavLink to="user/AllCourse">All Courses</NavLink>
            </li>
            <li className='underline'>
            <IoBookSharp />
              <NavLink to="user/Mycourse">My Courses</NavLink>
            </li>
            <li className='underline'>
              <FaChartLine />
              <NavLink to="user/Analitics">Analitics</NavLink>
            </li>
            <li className='underline'>
              <GiAchievement />
              <NavLink to="user/Achievements">Achievements</NavLink>
            </li>
            <li className='underline'>
              <RiCommunityFill />
              <NavLink to="user/CommunityForums">Community</NavLink>
            </li>
            <li className='underline'>
              <IoLibrary />
              <NavLink to="user/ResourceLibrary">Resource Library</NavLink>
            </li>
            <li className='underline'>
              <IoCalendarNumberOutline />
              <NavLink to="user/Calendar">Calendar</NavLink>
            </li>
            <li className='underline'>
              <FcCustomerSupport />
              <NavLink to="user/Support">Support</NavLink>
            </li>
            <li className='underline'>
              <IoChatbubblesSharp />
              <NavLink to="user/ChatBot">Chat Bot</NavLink>
            </li>
            <li className='underline'>
              <div className='logout_dashboard' onClick={handleSignout}>
                <MdLogout />
                <p className='logout_dash'>Log Out</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default DashNav;