import React from "react";
import { createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import WelcomeScreen from "../screens/WelcomeScreen";
import AuthScreen from "../screens/AuthScreen";

export default createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Main: MainTabNavigator,
  Auth: { screen: AuthScreen }
});
