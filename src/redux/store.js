//redux
import { legacy_createStore as createStore } from "redux";
//async calls with redux
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//reducer
import combinedReducer from "./reducers/combinedReducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combinedReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
