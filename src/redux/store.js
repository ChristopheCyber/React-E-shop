import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import Reducers combined:
import rootReducer from './root-reducer';

//store takes Middlewares fcts inside an Array for applyMiddleware
const middlewares = [logger];
//for creating the store:
const store = createStore( rootReducer, 
    applyMiddleware(...middlewares) ); 
    // ... => applying on all Array elemts <=> applyMiddleware(logger, .. )

export default store;
