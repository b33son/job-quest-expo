/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/job-quest-react-native/store/index.js
 */

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

export default store;
