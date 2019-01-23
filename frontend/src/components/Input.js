import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

export default props => (
    <View style={props.styleInput}>
        <View style={styles.input}>
            {props.icon && <SimpleLineIcons {...props.icon} />}
            <TextInput {...props.textInput} />
        </View>

        <View style={[styles.divider, props.styleDivider]} />
    </View>
);

const styles = StyleSheet.create({
    input: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 24
    },
    divider: {
        borderColor: "rgba(255, 255, 255, 0.5)",
        height: 0,
        borderWidth: 2,
        marginHorizontal: 16
    }
});
