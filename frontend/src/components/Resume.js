import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const iconProps = {
    name: "smileo",
    size: 150,
    color: "#649ae8"
};

const iconProps2 ={
    name: "frowno",
    size: 150,
    color: "red"
};


const iconProps3 = {
    name: "meh",
    size: 150,
    color: "gray"
};

export default class Resume extends Component {
    render(){return(
        <View style={styles.container}>
            <View style={styles.resume}>
                <AntDesign {... iconProps} style={styles.face}/>
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
        flex: 1,
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
        marginHorizontal: 30,
    },
    face: {
        flex: 3,
        marginVertical: 20,
        alignSelf: "center",
    },
});