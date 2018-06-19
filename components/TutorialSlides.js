/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/job-quest-react-native/components/TutorialSlides.js
 */

import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import {
  DeckSwiper,
  Card,
  CardItem,
  Left,
  Right,
  View,
  Button,
  Icon
} from "native-base";

export default class TutorialSlides extends Component {
  addFinishTutorialButton = () => {
    return (
      <Button full light onPress={this.props.endTutorialClick}>
        <Icon active type="MaterialCommunityIcons" name="launch" />
        <Text>Get started now</Text>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </Button>
    );
  };
  render() {
    return (
      <View>
        <DeckSwiper
          dataSource={this.props.data}
          renderItem={slide => (
            <Card style={{ elevation: 3, height: 200 }}>
              <CardItem>
                <Left>
                  <Text>{slide.header}</Text>
                </Left>
              </CardItem>
              <CardItem cardBody />
              <CardItem>
                <Text style={styles.slideText}>{slide.body} </Text>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>{slide.footer}</Text>
                </Left>
              </CardItem>
              <CardItem>{this.addFinishTutorialButton()}</CardItem>
            </Card>
          )}
        />
      </View>
    );
  }
}

const styles = {
  slideText: {
    fontSize: 24
  }
};
