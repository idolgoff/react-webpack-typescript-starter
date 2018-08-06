import thunk from "redux-thunk";
import logger from "redux-logger";
import {applyMiddleware, compose, createStore} from "redux";
import {* as appReducer} from "@redux/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const isProduction = process.env["NODE_ENV"] === "production"
export const store = isProduction ?
    createStore(appReducer, applyMiddleware(thunk)) :
    createStore(appReducer, composeEnhancers(applyMiddleware(thunk, logger)));
