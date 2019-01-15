import React from "react";
import {
    View,
    StatusBar,
    StyleSheet,
    Dimensions,
    Text
} from "react-native";

import DrawerItem from "./DrawerItem";

const With = Dimensions.get("window").width;

export default props => (
    <View style={styles.container}>
        <StatusBar backgroundColor="#49599A" barStyle="light-content" />

        <View style={styles.context}>
            <DrawerItem
                iconFamily="SimpleIcon"
                iconName={props.iconLeft}
                textStyle={{fontSize: 0}}
                iconStyle={styles.icon}
                onPress={props.onPressLeft}
            />

            <Text style={styles.text}> {props.name || "Canary"} </Text>

            <DrawerItem
                iconFamily="SimpleIcon"
                iconName={props.iconRight}
                textStyle={{fontSize: 0}}
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
        backgroundColor: "#5C6BC0"
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
        color: "#fff",
        marginLeft: 32,
    },
    icon:{
        marginBottom: 7
    }
});
