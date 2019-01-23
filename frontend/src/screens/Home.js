import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Resume from "../components/Resume";

import { colors } from "../common";

export default class Home extends Component {
    state = {
        first: false
    };

    render() {
        const { first } = this.state;

        return (
            <View style={styles.container}>
                <Header
                    iconLeft="menu"
                    iconRight="social-twitter"
                    onPressLeft={this.props.navigation.openDrawer}
                    onPressRight={() =>
                        this.props.navigation.navigate("SeeCanaries")
                    }
                />
                {first ? <Welcome /> : <Resume />}
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
