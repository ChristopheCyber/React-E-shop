import './cart-dropdown.styles.scss';
import React from 'react';
//for routing
import { withRouter } from 'react-router-dom';

import CartDropdownItem from '../cart-dropdown-item/cart-dropdown-item.component';
import CustomButton from '../reusable-components/custom-button/custom-button.component';

// for Redux use :
import { connect } from 'react-redux';
//Redux Selector fct :
import { selectCartItems } from '../../redux/cart/cart.selectors.js';
import { toggleCartHidden } from '../../redux/cart/cart-actions.js';
//import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ?
        (
          <div> {/* {JS}+<tags> must be wrapped here in JSX */}
            <span className='cart-items-title'>Your Cart :</span>
            {
              cartItems.map(cartItem => (
                <CartDropdownItem key={[cartItem.id, cartItem.category]} item={cartItem} />))
            }
          </div>
        ) : (
          <span className='cart-items-title'>
            Your Cart is empty : <br /> <br /> Please select items first.
          </span>
        )
      }
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      Checkout
    </CustomButton>
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
/* or :
const mapStateToProps = createStructuredSelector({cartItems: selectCartItems});
*/

export default withRouter(connect(mapStateToProps)(CartDropdown));