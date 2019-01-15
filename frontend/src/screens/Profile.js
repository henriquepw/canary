import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../components/Header";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import DrawerItem from "../components/DrawerItem";

import { colors } from "../common";

export default class Profile extends Component {
    state = {};

    render() {
        return (
            <View style={styles.container}>
                <Header
                    iconLeft="arrow-left"
                    iconRight="social-twitter"
                    onPressLeft={this.props.navigation.openDrawer}
                />
                <View style={styles.category}>
                    <Text style={styles.text}> Perfil </Text>
                    <SimpleLineIcons />
                </View>

                <View style={styles.category}>
                    <Text style={styles.text}> Canario </Text>
                    <SimpleLineIcons />
                </View>

                <DrawerItem
                    name="Adicionar"
                    iconFamily="SimpleIcon"
                    iconName="plus"
                />

                <DrawerItem
                    containerStyle={{marginTop: 16}}
                    name="Remover"
                    iconFamily="SimpleIcon"
                    iconName="close"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondaryColor
    },
    category: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 16,
        paddingHorizontal: 16,
        height: 46
    },
    text: {
        color: colors.secondaryTextColor,
        fontSize: 16,
        fontFamily: "Lato-Bold"
    }
});
