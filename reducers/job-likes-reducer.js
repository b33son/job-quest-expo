/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/job-quest-react-native/reducers/job-likes-reducer.js
 */
import _ from "lodash";
import { LIKE_JOB } from "../actions/types";
import JobConstants from "../constants/job";

export default function(state = [], action) {
  switch (action.type) {
    case LIKE_JOB:
      // return a unique list of existing likes plus the newly liked job
      return _.uniqBy([action.payload, ...state], JobConstants.JOB_KEY_NAME);
    default:
      return state;
  }
}
