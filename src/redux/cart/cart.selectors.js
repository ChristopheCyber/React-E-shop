import { createSelector } from 'reselect';
//INPUT selector returning just the slice of state: state.cart
const selectCart = state => state.cart;

//1st OUTPUT selector returning just the slice of state: state.cart.cartItems
// using createSelector for MEMOIZATION
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

//2nd OUTPUT selector returning reduced quantity computed from .cartItems
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (sigmaQuantity, cartItem) => 
      sigmaQuantity + cartItem.quantity, 0 )
);