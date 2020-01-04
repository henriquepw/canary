import React from "react";
import { View, StatusBar, StyleSheet, Dimensions, Text } from "react-native";

import DrawerItem from "./DrawerItem";
import { colors } from "../common";

const With = Dimensions.get("window").width;

export default props => (
    <View style={styles.container}>
        <StatusBar
            backgroundColor={colors.primaryDarkColor}
            barStyle="light-content"
        />

        <View style={styles.context}>
            <DrawerItem
                iconFamily="SimpleIcon"
                iconName={props.iconLeft}
                textStyle={{ fontSize: 0 }}
                iconStyle={styles.icon}
                onPress={props.onPressLeft}
            />

            <Text style={styles.text}> {props.name || "Canary"} </Text>

            <DrawerItem
                iconFamily={props.iconRightFamily ? props.iconRightFamily : "SimpleIcon"}
                iconName={props.iconRight}
                textStyle={{ fontSize: 0 }}
                iconStyle={styles.icon}
                onPress={props.onPressRight}
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: With,
        height: 56,
        backgroundColor: colors.primaryColor
    },
    context: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16
    },
    text: {
        flex: 1,
        fontSize: 20,
        color: colors.primaryTextColor,
        marginLeft: 32
    },
    icon: {
        marginBottom: 7
    }
});
