import React from 'react';
import './cart-dropdown.styles.scss';

import CustomButton from '../reusable-components/custom-button/custom-button.component';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
    </div>
    <CustomButton> Checkout </CustomButton>
  </div>
);

export default CartDropdown;