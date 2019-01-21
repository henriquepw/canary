import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

iconProps = {
    name: "smile-o",
    size: 125,
    color: "#649ae8"
};

class CanaryMessage extends Component{

    render(){return(
        <View style={styles.container}>
            <FontAwesome {... iconProps} style={styles.face}/>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Texto Texto Texto Texto</Text>
                <Text style={styles.text}>Texto Texto Texto Texto</Text>
                <Text style={styles.text}>Texto Texto Texto Texto</Text>
                <Text style={styles.text}>Texto Texto Texto Texto</Text>
                <Text style={styles.text}>Texto Texto Texto Texto</Text>
            </View>
        </View>
    );}
}

export default CanaryMessage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        marginVertical: 12,
        marginHorizontal: 16,
        alignItems: "center",

    },
    face: {
        flex: 3,
        marginVertical: 10,
        alignSelf: "center",
    },
    textContainer: {
        flex: 5,
    },
    text: {
        fontSize: 16,
    },

});