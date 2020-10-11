import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
// for Redux use :
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
//Redux Selector fct :
import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js';

const CartIcon = ({ fctToggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={()=>
    {console.log("fctToggleCartHidden =", fctToggleCartHidden);
    fctToggleCartHidden()}
  }>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  fctToggleCartHidden: () => dispatch(toggleCartHidden())
});
//reading from Redux and using Selector:
const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state) // USING MEMOIZED SELECTOR
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);