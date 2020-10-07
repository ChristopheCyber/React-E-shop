import CartActionTypes from './cart-actions-types';

const INITIAL_STATE = {
  hidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        //not passing a value, just switching boolean
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;