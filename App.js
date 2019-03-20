import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from "react-native";

export default class App extends Component<Props> {
  state = { placename: "", places: [] };

  placeNameChangeHandler = event => {
    this.setState({
      placename: event
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placename === "") {
      return;
    }

    // state update that deals w/ async
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placename)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <Text key={i}>{place}</Text>
    ));

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="a place holder"
            style={{}}
            value={this.state.placename}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button
            title="Add"
            style={styles.buttonInput}
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start",
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
  buttonInput: {
    width: "30%"
  }
});
