import MenuItemActionTypes from './menu-item-actions-types';

const INITIAL_STATE = {
    triggerPopUpHome: false
  };
  
  const menuItemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case MenuItemActionTypes.TOGGLE_POPUP_CAROUSEL_HOME:
        return {
          ...state,
          //not passing a value, just switching boolean
          triggerPopUpHome: !state.triggerPopUpHome
        };
      default:
        return state;
    }
  };
  
  export default menuItemReducer;