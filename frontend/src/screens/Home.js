import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "../components/Header";
import Welcome from "../components/Welcome";

import { colors } from "../common";

export default class Home extends Component {
    state = {
        first: true
    };

    render() {
        const { first } = this.state;

        return (
            <View style={styles.container}>
                <Header
                    iconLeft="menu"
                    iconRight="social-twitter"
                    onPressLeft={this.props.navigation.openDrawer}
                />
                {first ? <Welcome /> : ""}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryLightColor
    }
});
