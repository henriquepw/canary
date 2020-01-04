import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import Header from "../components/Header";

import { colors } from "../common";

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          name="Sobre"
          iconLeft="menu"
          iconRight="yuque"
          iconRightFamily="AntDesign"
          onPressLeft={this.props.navigation.openDrawer}
          onPressRight={() => this.props.navigation.navigate("SeeCanaries")}
        />
        <View style={styles.category}>
          <Text style={[styles.title, { flex: 1 }]}>Desenvolvedores</Text>
        </View>
        <View>
          <Text style={styles.text}>David Batista de Luna</Text>
          <Text style={styles.text}>Gabriel de Sousa Barros</Text>
          <Text style={styles.text}>Henrique Martins Miranda</Text>
        </View>
        <View style={styles.category}>
          <Text style={[styles.title, { flex: 1 }]}>Desenvolvedores</Text>
        </View>
        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryLightColor
  },
  category: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    paddingHorizontal: 16,
    height: 46
  },
  title: {
    color: colors.secondaryTextColor,
    fontSize: 16,
    fontFamily: "Lato-Bold"
  },
  text: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "Lato-Bold"
  }
});
