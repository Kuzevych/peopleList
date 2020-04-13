import {applyMiddleware, createStore as createReduxStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from "../reducers";
import {initialState} from "./initialState";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";


export const createStore = () => createReduxStore(rootReducer,initialState, composeWithDevTools(applyMiddleware(thunk, logger)));