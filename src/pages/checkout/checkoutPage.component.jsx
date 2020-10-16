import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
//Stripe checkout button for Payment:
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import './checkoutPage.component.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price per item</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={[cartItem.id, cartItem.category]} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL = ${total}</div>
    {/*Stripe payment checkout button*/}
    <StripeCheckoutButton price={total} />
    <div className='demo-warning'>
      *** Please use the following <span>demo Credit Card</span> for Payment tests : ***
      <br />
      Card number:
      <span> 5555 5555 5555 4444 </span>
      -Exp: <span>12/34 </span> (any future date) 
      -CVV: <span>123 </span> (any 3 digits)
      <br />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
