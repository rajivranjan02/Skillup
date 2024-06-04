
import ImageSlider from './ImageSlider'
import Footer from './Footer'
import Header from './Header'
import '../style/home.css'
import Navbar from './Navbar'

import React, {useEffect } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from './Login'

function Home() {

  return (
    <div>
       <ImageSlider/>
       <Header/>
       <Footer/>
       
    </div>
  )
}

export default Home