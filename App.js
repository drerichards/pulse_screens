import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/components/Login";
import Events from "./src/components/Events";
import Profile from "./src/components/Profile";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Profile />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333"
  }
});
