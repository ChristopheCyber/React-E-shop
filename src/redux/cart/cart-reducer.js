import CartActionTypes from './cart-actions-types';
//utility fct:
import { addItemToCart, removeItemFromCart } from './cart-utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        //not passing a value, just switching boolean
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        //passing value of increased items array
        // cartItems: [...state.cartItems, action.payload]
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        //passing value of increased items array
        // cartItems: [...state.cartItems, action.payload]
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        //filter() removing all items not validating these conditions

        cartItems: state.cartItems.filter(
          cartItem => (cartItem.id !== action.payload.id
            || cartItem.category !== action.payload.category)
          // !(A1=A2 && B1=B2) <=> !(A1=A2) || !(B1=B2) 
        )
      };
    default:
      return state;
  }
};

export default cartReducer;