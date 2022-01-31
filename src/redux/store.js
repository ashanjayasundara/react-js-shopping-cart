import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import cakeReducer from "./cake/cakeReducer";
// import iceCreamReducer from "./iceCream/iceCreamReducer";
import rootReducers from "./rootReducers";



const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;