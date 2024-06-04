import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import '../style/navbar.css';
import Login from './Login';
import Catagories from './Catagories';
import Projects from './Projects';
import FAQ from '../components/FAQ';
import About from '../components/About';
import Home from '../components/Home';
import SearchBar from '../components/SearchBar';
import Signup from './Signup';
import DashHome from '../Dashboard/DashHome';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="home_navbar">
      <div className="home_container">
        <div className="logo">
          <img src={require('../assets/skillupLogo.png')} width={60} alt="Logo" />
        </div>
        <div
          className="toggle-button"
          onClick={toggleNavbar}
          aria-label="Toggle Navigation"
        >
          <span className="toggle-icon"></span>
        </div>
        <div className={`nav-elements ${isNavExpanded ? 'show' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={toggleNavbar}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Catagories" onClick={toggleNavbar}>
                Catagories
              </NavLink>
            </li>
            <li>
              <NavLink to="/Projects" onClick={toggleNavbar}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" onClick={toggleNavbar}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/FAQ" onClick={toggleNavbar}>
                FAQ
              </NavLink>
            </li>
            <li>
              <SearchBar />
            </li>
            <li className="login">
              <NavLink to="/Login" onClick={toggleNavbar}>
                Log In
              </NavLink>
            </li>
            <li className="login">
              <NavLink to="/Signup" onClick={toggleNavbar}>
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Catagories" element={<Catagories />}></Route>
        <Route exact path="/Projects" element={<Projects />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/FAQ" element={<FAQ />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Signup" element={<Signup />}></Route>
        <Route exact path="/user/" element={<DashHome />} />
      </Routes>
    </nav>
  );
};

export default Navbar;