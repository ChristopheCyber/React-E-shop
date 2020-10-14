import CartActionTypes from './cart-actions-types';

export const toggleCartHidden = () => ({
  /*don't need a payload here, just switching boolean, payload is optional*/
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItemInCart = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});