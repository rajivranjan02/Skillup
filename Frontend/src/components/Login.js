import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import '../style/login.css';
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/user/user/Dashboard")
            alert("login successful !")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            alert(" Somthing went wrong")
        });
       
    }
 
    return(
        <>
            <main >        
                <section className='total_login_container'>
                    <div className='container_outside'> 
                    <div className='Login_img'>
                      <img src={require('../assets/loginImage.jpg')} alt="Image 1" width={350} />
                       </div>                      
                                                       
                        <div className='email_password_login'>
                        <form>                                              
                            <div className='email'>
                                <label htmlFor="email-address">
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div className='password'>
                                <label htmlFor="password">
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div>
                                <div  className='Login_button_home'                              
                                    onClick={onLogin}                                       
                                >      
                                    Login                                                                  
                                </div>
                            </div>                               
                        </form>
                        </div>
                       
                       
                                                   
                    </div>
                    <p className="text_sm_text_white_text_center">
                            No account yet? {' '}
                            <NavLink to="/Signup">
                                Sign up
                            </NavLink>
                        </p>
                </section>
            </main>
        </>
    )
}
 
export default Login