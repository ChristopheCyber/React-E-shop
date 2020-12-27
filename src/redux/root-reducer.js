import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import menuItemReducer from './menu-item/menu-item-reducer';
//for Redux Persistance :
import { persistReducer } from 'redux-persist';
// storage = local-Storage on Window browser : (=>persists untill page close)
// (sessionStorage=>persists always untill history cleaned, not used here )
import storage from 'redux-persist/lib/storage';

//JSON object persisting config we want:
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] 
    //selecting the Reducers we want to store
    //'user' is already stored by Firebase auth
};

/*
export default combineReducers({
    //key property(=> slice of the state = individual Reducer)
    user: userReducer,
    cart: cartReducer
}) // exporting all the JSON full state object
*/
//for Redux Peristance :
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    menuItemKey: menuItemReducer
});// all the JSON full state object

export default persistReducer(persistConfig, rootReducer);