import React from 'react';
import './cart-dropdown.styles.scss';

import CartDropdownItem from '../cart-dropdown-item/cart-dropdown-item.component';
import CustomButton from '../reusable-components/custom-button/custom-button.component';
// for Redux use :
import { connect } from 'react-redux';

const CartDropdown = ( {cartItems} ) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartDropdownItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton> Checkout </CustomButton>
  </div>
);


const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);