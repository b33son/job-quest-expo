/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/job-quest-react-native/screens/ReviewScreen.js
 */

import React, { Component } from "react";
import { View, Text, Button, Linking } from "react-native";
import navigation from "react-navigation";
import { connect } from "react-redux";
import actions from "../actions";
import { ScrollView } from "react-native";

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Review Jobs",
      headerRight: (
        <Button
          title="Settings"
          onPress={() => navigation.navigate("Settings")}
        />
      )
    };
  };

  renderLikedJobs = () => {
    return this.props.likedJobs.map(({ MatchedObjectDescriptor }) => {
      job = MatchedObjectDescriptor;
      debugger;
      return (
        <View style={{ height: 200 }}>
          <View style={styles.detailWrapper}>
            <Text style={styles.italics}>{job.OrganizationName}</Text>
            <Text style={styles.italics}>{job.PositionStartDate}</Text>
          </View>
          <Button
            title="Apply Now"
            background="#03A9F4"
            onPress={() => Linking.openURL(job.ApplyURI[0])}
          />
        </View>
      );
    });
  };
  render() {
    return <ScrollView>{this.renderLikedJobs()}</ScrollView>;
  }
}

const mapStateToProps = state => {
  return { likedJobs: state.likedJobs };
};

const styles = {
  detailWrapper: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  italics: {
    fontStyle: "italics"
  }
};

export default connect(
  mapStateToProps,
  actions
)(ReviewScreen);
