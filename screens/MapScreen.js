import React, { Component } from "react";
import { View } from "react-native";
import { MapView } from "expo";
import { Spinner, Button, Icon, Text } from "native-base";
import { connect } from "react-redux";
import * as actions from "../actions";

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      latitude: 37,
      longitude: -122,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04
    }
  };

  componentDidMount = () => {
    this.setState({ mapLoaded: true });
  };

  onRegionChangeComplete = region => {
    this.setState({ region });
    //console.log(region);
  };

  onSearchPress = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate("Deck");
    });
  };
  render() {
    if (!this.state.mapLoaded) {
      return <Spinner />;
    }
    return (
      <View>
        <MapView
          style={{ alignSelf: "stretch", height: "100%" }}
          initialRegion={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button primary iconLeft full onPress={this.onSearchPress}>
            <Icon name="search" />
            <Text>Search This Area</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20
  }
};
// const mapStateToProps = props => {
//   return { ...props };
// };

export default connect(
  null,
  actions
)(MapScreen);
