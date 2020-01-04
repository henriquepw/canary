import React, { Component } from "react";
import {
  View,
  AsyncStorage,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import axios from "axios";
import { colors, navigateAction } from "../common";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default class SplashScreen extends Component {
  stage = {
    intervalId: 1
  };

  componentWillMount = async () => {
    const json = await AsyncStorage.getItem("userData");
    const userData = JSON.parse(json) || {};
    let screen = "";

    if (userData.token) {
      axios.defaults.headers.common[
        "Authrization"
      ] = `bearer ${userData.token}`;

      screen = "Home";
    } else {
      screen = "Autentication";
    }

    const navigate = () => navigateAction(screen, this.props.navigation);

    this.setState({ intervalId: setInterval(navigate, 1000) });
  };

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.primaryColor}
          barStyle="light-content"
        />
        <ActivityIndicator style={{ flex: 1 }} size="large" />
        <Image
          style={styles.image}
          source={require("../../assets/imgs/background2x.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryColor
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.183,
    justifyContent: "flex-end",
    marginBottom: 8
  }
});
