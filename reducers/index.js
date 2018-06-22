/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/job-quest-react-native/reducers/index.js
 */

import { combineReducers } from "redux";
import auth from "./auth-reducer";
import jobs from "./jobs-reducer";

export default combineReducers({
  auth,
  jobs
});
