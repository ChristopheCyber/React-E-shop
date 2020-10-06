import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';

export default combineReducers({
    //key property(=> slice of the state = individual Reducer)
    user: userReducer,
    cart: cartReducer
}) // exporting all the JSON full state object