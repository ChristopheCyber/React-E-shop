import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
//for Redux Peristance :
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
    cart: cartReducer
});// all the JSON full state object

export default persistReducer(persistConfig, rootReducer);