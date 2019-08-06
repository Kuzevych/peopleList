import React from 'react';
import {Provider} from "react-redux";
import {createStore} from "./store/createStore";
import {PeopleList} from "./components/PeopleList";
const store = createStore();

export const App = () =>{
  return(
        <Provider store={store}>
            <PeopleList/>
        </Provider>
  );
};