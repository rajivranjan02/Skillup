import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import '../Dash_Style/YourComponent.css';

const YourComponent = ({ totalAmount }) => {
  const handleToken = (token) => {
    // Handle the token received from Stripe
  };

  return (
    <StripeCheckout
      name="Payment Method"
      currency="INR"
      amount={totalAmount * 100}
      stripeKey="pk_live_51PMDD2BtPI5l2zMI2Fg7yXWEBQz2J4e1SXF49s6JNvBpcnY3Okqj7x2XPGQwtdowfXkKSLB7jqZLDTDQWKRSnnfB0075KIqTfC"
      token={handleToken}
      className="stripe-button"
    >
      <button className="custom-stripe-button">
        Pay Now
      </button>
    </StripeCheckout>
  );
};

export default YourComponent;
