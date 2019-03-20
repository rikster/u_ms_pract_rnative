/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  state = { placename: "" };

  placeNameChangeHandler = event => {
    // note; *this in hear refers to the App Component in this () type of method
    // alert(event)

    this.setState({
      placename: event
    });
  };

  render() {
    return (

      <View style={styles.container}>
        <TextInput
          style={{ width: 300, borderColor: "black", borderWidth: 1 }}
          value={this.state.placename}
          onChangeText={this.placeNameChangeHandler}
        />
      </View>
    );
  }
}

// https://facebook.github.io/react-native/docs/stylesheet
const styles = StyleSheet.create({
  // https://facebook.github.io/react-native/docs/flexbox
  container: {
    flex: 1,
    // padding: 10,
    marginTop: 10,
    justifyContent: "flex-start", // flex- direction default - top-to-bottom - white background fix w/ flex: 1
    alignItems: "center",
    backgroundColor: "#fff"
  }
});
