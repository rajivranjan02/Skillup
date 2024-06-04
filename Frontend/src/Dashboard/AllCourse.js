import React, { useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import '../Dash_Style/AllCourse.css';
import StripeCheckout from 'react-stripe-checkout';
import SearchBar from '../components/SearchBar';
import { NavLink, Routes, Route } from 'react-router-dom';
import YourComponent from './YourComponent';

function AllCourse() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showPayment, setShowPayment] = useState(false); // State to control the visibility of YourComponent

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item !== itemToRemove));
  };

  const totalAmount = cartItems.length * 210;

  const handleBuyNow = () => {
    setShowPayment(true);
  };

  return (
    <div className='course_main_container'>
      <strong>{cartItems.length}</strong>
      <div className='cart_course'>
        <h2>All Course</h2>
        
        <NavLink onClick={toggleCart}><FaCartArrowDown size={35} className='icon_cart' /></NavLink>
      </div>
      <div className='course_main'>
        <div className='course_div'>
          <ul className='img_course_div2'>
            <li>
              <img src={require('../assets/DATASCIENCE7.png')} width={300} alt="Course 1" />
              <div className='Buycourse' onClick={() => addToCart('Cloud Computing')}>Add to cart($210) </div>
              <p>Cloud Computing</p>
            </li>
            <li>
              <img src={require('../assets/DATASCIENCE2.png')} width={300} alt="Course 2" />
              <div className='Buycourse' onClick={() => addToCart('DigitalMarketing')}>Add to cart($210)</div>
              <p>DigitalMarketing</p>
            </li>
            <li>
              <img src={require('../assets/DATASCIENCE1.png')} width={300} alt="Course 3" />
              <div className='Buycourse' onClick={() => addToCart('DAS-AIML($210)')}>Add to cart($210)</div>
              <p>DAS-AIML</p>
            </li>
            <li>
              <img src={require('../assets/DATASCIENCE4.png')} width={300} alt="Course 4" />
              <div className='Buycourse' onClick={() => addToCart('MERNstack')}>Add to cart($210)</div>
              <p>MERNstack</p>
            </li>
            {showCart && (
              <li>
                <div
                  className={`view_cart_detials ${showCart ? 'show' : ''}`}
                  style={{ transform: showCart ? 'translateX(300px)' : 'translateX(-300px)' }}
                >
                  <h5>the cart Items</h5>
                  <div className='add_itmes'>
                    {cartItems.map((item, index) => (
                      <div key={index} className="cart-item">
                        <p>{item}</p>
                        <div onClick={() => removeFromCart(item)} className='remove_items'>Remove Item</div>
                      </div>
                    ))}
                  </div>
                  <div className='check_items' onClick={handleBuyNow}> 
                    {showPayment ? <YourComponent /> : `Total amount = $(${totalAmount}) Buy Now`}
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
        <div className='course_div'>
          <ul className='img_course_div2'>
            <li>
              <img src={require('../assets/DATASCIENCE.png')} width={300} alt="Course 1" />
              <div className='Buycourse' onClick={() => addToCart('dataScience')}>Add to cart($210)</div>
              <p>dataScience</p>
            </li>
            <li>
              <img src={require('../assets/DATASCIENCE5.png')} width={300} alt="Course 1" />
              <div className='Buycourse' onClick={() => addToCart('javaBootcamp')}>Add to cart($210)</div>
              <p>javaBootcamp</p>
            </li>
            <li>
              <img src={require('../assets/DATASCIENCE6.png')} width={300} alt="Course 1" />
              <div className='Buycourse' onClick={() => addToCart('SEO')}>Add to cart($210)</div>
              <p>SEO</p>
            </li>
            <li>
              <img src={require('../assets/DATASCIENCE3.png')} width={300} alt="Course 1" />
              <div className='Buycourse' onClick={() => addToCart('Ai Expert')}>Add to cart($210)</div>
              <p>Ai Expert</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AllCourse;
