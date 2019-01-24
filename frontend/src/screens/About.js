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
                    onPressRight={() =>
                        this.props.navigation.navigate("SeeCanaries")
                    }
                />
                <View>
                    <Text>David</Text>
                    <Text>Gabriel</Text>
                    <Text>Henrique</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryLightColor
    }
});
