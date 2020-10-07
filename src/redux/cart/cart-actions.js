import CartActionTypes from './cart-actions-types';

export const toggleCartHidden = () => ({
  /*don't need a payload here, just switching boolean, payload is optional*/
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});