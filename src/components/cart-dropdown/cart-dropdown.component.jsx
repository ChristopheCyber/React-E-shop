import React from 'react';
import './cart-dropdown.styles.scss';

import CartDropdownItem from '../cart-dropdown-item/cart-dropdown-item.component';
import CustomButton from '../reusable-components/custom-button/custom-button.component';
// for Redux use :
import { connect } from 'react-redux';
//Redux Selector fct :
import { selectCartItems } from '../../redux/cart/cart.selectors.js';

const CartDropdown = ( {cartItems} ) => (
  <div className='cart-dropdown'>
  <div className='cart-items'>
    <span className='cart-items-title'>Your Cart :</span>
      {cartItems.map(cartItem => (
        <CartDropdownItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton> Checkout </CustomButton>
  </div>
);


/* before using of Reducer :
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
}); 
*/
//using reducer: 
const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);