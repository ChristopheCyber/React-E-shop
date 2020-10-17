import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  // stripe considers price in cents => n $ =n*100 cents
  const priceForStripe = price * 100;
  //publishableKey => linking App to Stripe account 
  const publishableKey = 'pk_test_51HcvKtLSFw3FSj4wwxSrljZ3Z5feiZzAW3RrgRMKl4rQwgGJS0TxybzaJbR32WMPNCc7Mlz3ExpjMw2wYe9OWFRj00a6o02mBA';
  
  //setting the outcome after successful payment : 
  //(in real production => an API passes the price to BackEnd for charging it)
  const onToken = token => {
    console.log("Successful payment => token object passed to BackEnd =",token); 
    alert('Your (demo) Payment was Succesful !');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='King E-Shop demo Ltd.'
      //for user to set it:
      billingAddress
      shippingAddress
      // image="https://stripe.com/img/documentation/checkout/marketplace.png"
      // image='https://svgshare.com/i/CUz.svg'
      image={require(`../../assets/crown.svg`)}
      /*{require(`./img/${category}/img${id}.jpg`)}
      <img src={require(`./img/${category}/img${id}.jpg`)}
            />
      */
      description={`Your total is $${price}`} //here price not in cents
      /* 
      //currency="EUR" or "USD"..
      currency="USD"
      //some other options.. cf:
      //https://github.com/azmenak/react-stripe-checkout#send-all-the-props
      shippingAddress
      billingAddress={false}
      */
      amount={priceForStripe} //here price in cents
      panelLabel='Pay Now'
      token={onToken} //setting the outcome after successful payment
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;