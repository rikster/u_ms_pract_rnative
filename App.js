/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

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
        <View style={styles.inputContainer} >
          <TextInput
            style={styles.placeInput}
            placeholder="a place holder"
            style={{ }}
            value={this.state.placename}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button title="Add" style={styles.buttonInput} />
        </View>
      </View>
    );
  }
}

// API (not real CSS):
// https://facebook.github.io/react-native/docs/stylesheet
// Style cheatsheet:
// https://github.com/vhpoet/react-native-styling-cheat-sheet
const styles = StyleSheet.create({
  // https://facebook.github.io/react-native/docs/flexbox
  container: {
    flex: 1,
    padding: 10,
    // marginTop: 10,
    justifyContent: "flex-start", // flex- direction default - top-to-bottom - white background fix w/ flex: 1
    alignItems: "center",
    backgroundColor: "#fff"
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  buttonInput:{
    width: "30%"
  }
});
