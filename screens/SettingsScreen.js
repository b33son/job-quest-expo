import React from "react";
import { View, Button, Text } from "native-base";
import { connect } from "react-redux";
import * as actions from "../actions";
class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Settings"
  };

  onPressClear = () => {
    this.props.clearLikedJobs();
  };
  render() {
    return (
      <View>
        <Button onPress={onPressClear}>
          <Text>Clear Liked Jobs</Text>
        </Button>
      </View>
    );
  }
}

export default connect(
  null,
  actions.clearLikedJobs
)(SettingsScreen);
