import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const iconProps = {
    name: "smile-o",
    size: 150,
    color: "#649ae8"
};

const iconProps2 = {
    name: "frown-o",
    size: 150,
    color: "red"
};

const iconProps3 = {
    name: "meh-o",
    size: 150,
    color: "#ff982b"
};

export default class Resume extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.resume}>
                    <FontAwesome {...iconProps} style={styles.face} />
                    <View style={styles.textContainer}>
                        <Text>Texto Texto Texto Texto Texto Texto</Text>
                        <Text>Texto Texto Texto Texto Texto Texto</Text>
                        <Text>Texto Texto Texto Texto Texto Texto</Text>
                        <Text>Texto Texto Texto Texto Texto Texto</Text>
                        <Text>Texto Texto Texto Texto Texto Texto</Text>
                        <Text>Texto Texto Texto Texto Texto Texto</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1
    },
    resume: {
        marginHorizontal: 20,
        backgroundColor: "white",
        marginVertical: 12,
        flex: 1,
        justifyContent: "flex-start",
        alignContent: "center"
    },
    textContainer: {
        flex: 6,
        marginHorizontal: 30
    },
    face: {
        flex: 3,
        marginVertical: 20,
        alignSelf: "center"
    }
});
