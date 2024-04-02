import { createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { applyMiddleware } from 'redux';
// import productReducer from './reducer/productReducer';
import rootReducer from './reducer/index';
import { composeWithDevTools } from '@redux-devtools/extension';

// let store = createStore(reducer);
// let store = createStore(productReducer, applyMiddleware(thunk));
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // combineReducer로 설정

export default store;