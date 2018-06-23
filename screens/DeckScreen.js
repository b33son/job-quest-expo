/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/job-quest-react-native/screens/DeckScreen.js
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Swipe from "../components/swipe";
import {
  Card,
  CardItem,
  Left,
  Text,
  Thumbnail,
  Body,
  Icon,
  Button,
  Container,
  Content
} from "native-base";
import { MapView } from "expo";
import { Platform, View, Dimensions } from "react-native";
import JobConstants from "../constants/job";

// SearchResult.SearchResultItems.MatchedObjectDescriptor
// PositionID
// PositionTitle
// ApplyURI
// PositionLocation.Longitude
// PositionLocation.Latitude
// OrganizationName
// PositionStartDate
// PositionFormattedDescription.Content

class DeckScreen extends Component {
  renderCard = ({ MatchedObjectDescriptor }) => {
    job = MatchedObjectDescriptor;
    let initRegion = null;
    if (job.PositionLocation.length > 1) {
      initRegion = {
        longitude: job.PositionLocation[0].Longitude,
        latitude: job.PositionLocation[0].Latitude,
        longitudeDelta: 0.045,
        latitudeDelta: 0.02
      };
    }
    const { width, height } = Dimensions.get("window");
    return (
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{job.PositionTitle}</Text>
              <Text note>{job.OrganizationName}</Text>
              <Text note>{job.PositionStartDate}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            {/* Must set both width and height on the MapView's containing View otherwise it won't render */}
            <View style={{ width, height: 300 }}>
              <MapView
                style={{ height: 300 }}
                scrollEnabled={false}
                //cacheEnabled={Platform.OS === "android" ? true : false}
                cacheEnabled={true}
                initialRegion={initRegion}
              />
            </View>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{ color: "#87838B" }}>
              <Icon name="logo-github" />
              <Text>1,926 stars</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  };

  renderNoMoreCards = () => {
    return <Card title="No more jobs" />;
  };

  onSwipeRight = job => {
    this.props.likeJob(job);
  };

  render() {
    initRegion = {
      latitude: 37,
      longitude: -122,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04
    };
    return (
      <Container>
        <Content scrollEnabled={false}>
          <Swipe
            keyName={JobConstants.JOB_KEY_NAME}
            data={this.props.jobs}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}
            onSwipeRight={this.onSwipeRight}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { jobs: state.jobs.SearchResult.SearchResultItems };
};

const styles = {
  detailWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "10"
  }
};

export default connect(
  mapStateToProps,
  actions
)(DeckScreen);
