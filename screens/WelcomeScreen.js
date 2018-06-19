/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/job-quest-react-native/screens/WelcomeScreen.js
 */
import React, { Component } from "react";
import { View, Container, Header } from "native-base";
import TutorialSlides from "../components/TutorialSlides";
import { AsyncStorage } from "react-native";
import { AppLoading } from "expo";
import _ from "lodash";

const SLIDES = [
  {
    header: "",
    body: "Welcome to Job Quest",
    footer: "Swipe for more tips...",
    end: false
  },
  {
    header: "",
    body: "Set your location",
    footer: "",
    end: false
  },
  {
    header: "",
    body: "Swipe right to add a job to your list",
    footer: "",
    end: false
  },
  {
    header: "",
    body: "It's that simple. Now let's get started",
    footer: "",
    end: true
  }
];

export default class WelcomeScreen extends Component {
  state = { token: null };

  componentWillMount = async () => {
    let token = await AsyncStorage.getItem("fb_token");
    if (token) {
      this.setState({ token });
      this.props.navigation.navigate("Map");
    } else {
      this.setState({ token: false });
    }
  };
  endWelcomeScreenClick = () => {
    console.log("Welcome screen end clicked");
    this.props.navigation.navigate("Auth");
  };

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    return (
      <Container>
        <Header />
        <View>
          <TutorialSlides
            data={SLIDES}
            endTutorialClick={this.endWelcomeScreenClick}
          />
        </View>
      </Container>
    );
  }
}
