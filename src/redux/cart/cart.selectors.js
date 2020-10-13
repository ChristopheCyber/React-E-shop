import { createSelector } from 'reselect';
//INPUT selector returning just the slice of state: state.cart
const selectCart = state => state.cart;

//1st OUTPUT selector returning just the slice of state: state.cart.cartItems
// using createSelector for MEMOIZATION
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

//OUTPUT selector for hidden
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

//OUTPUT selector returning reduced quantity computed from .cartItems in 1st OUTPUT
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (sigmaQuantity, cartItem) => 
      sigmaQuantity + cartItem.quantity, 0 )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);