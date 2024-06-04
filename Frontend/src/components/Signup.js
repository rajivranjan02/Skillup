import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../style/signup.css';


const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log(user);
      navigate("/Login");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      alert("Something went wrong");
    }
  }
  

  return (
    <main>        
      <section>
        <div>
          <div className='container_Outsite'>                                                                                             
            <form className='left_img_right_form'> 
              <div className='flex-container'>
                <div className='Login_img'>
                  <img src={require('../assets/loginImage.jpg')} alt="Image 1" width={350} />
                </div>
                <div className='email_password'>
                  <div className='gmail'>
                    <label htmlFor="email-address"></label>
                    <input
                      type="email"
                      label="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}  
                      required                                    
                      placeholder="Email address"                                
                    />
                  </div>
                  <div className='password'>
                    <label htmlFor="password"></label>
                    <input
                      type="password"
                      label="Create password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} 
                      required                                 
                      placeholder="Password"              
                    />
                  </div>
                </div>
              </div>
            </form>
            <div
              type="submit" 
              onClick={onSubmit}
              className='button_signup'                        
            >  
              Sign up                                
            </div>
            <p className='sign_up_p'>
              Already have an account?{' '}
              <NavLink to="/Login">
                Sign in
              </NavLink>
            </p>                   
          </div>
        </div>
      </section>
    </main>
  )
}

export default Signup;
