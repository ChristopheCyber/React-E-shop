import { combineReducers } from 'redux';

import userReducer from './user/user-reducer';

export default combineReducers({
    //key (= a slice of the state=individual Reducer)
    user: userReducer
}) // exporting all the JSON full state object