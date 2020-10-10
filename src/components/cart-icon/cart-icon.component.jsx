import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
// for Redux use :
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

const CartIcon = ({ fctToggleCartHidden }) => (
  <div className='cart-icon' onClick={()=>
    {console.log("fctToggleCartHidden =", fctToggleCartHidden);
    fctToggleCartHidden()}
  }>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  fctToggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);