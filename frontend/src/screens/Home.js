import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "../components/Header";

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    iconLeft="arrow-left"
                    iconRight="social-twitter"
                    onPressLeft={this.props.navigation.openDrawer}
                />

                <Text style={{ fontSize: 30, color: "white" }}>Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#649AE8"
    }
});
