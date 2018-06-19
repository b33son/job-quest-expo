/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/job-quest-react-native/actions/auth-actions.js
 */
import { AsyncStorage } from "react-native";
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "./types";
import { Facebook } from "expo";

//  Using AsyncStorage:
//    AsyncStorage.setItem('fb_token', token);
//    AsyncStorage.getItem('fb_token');

// export const facebookLogin = () => {
//   return async function (dispatch) {
//     let token = await AsyncStorage.getItem("fb_token");
//     if (token) {
//       // Dispatch action
//     }
//     else {
//       // start FB login
//     }
//   }
// };

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem("fb_token");
  if (token) {
    // Dispatch action
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    // start FB login
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  let { token, type } = await Facebook.logInWithReadPermissionsAsync(
    "232426874021854",
    {
      permissions: ["public_profile"]
    }
  );
  if (type === "cancel") {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem("fb_token", token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
