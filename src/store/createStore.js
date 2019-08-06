import {applyMiddleware, createStore as createReduxStore} from "redux";
import {rootReducer} from "../reducers";
import {initialState} from "./initialState";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";


export const createStore = () => createReduxStore(rootReducer,initialState,applyMiddleware(thunk, logger));