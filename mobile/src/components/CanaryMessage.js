import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { colors } from "../common";

smileProps = {
    name: "smile-o",
    size: 125,
    color: colors.smile_o
};

mehProps = {
    name: "meh-o",
    size: 125,
    color: colors.meh_o
};

frownProps = {
    name: "frown-o",
    size: 125,
    color: colors.frown_o
};

class CanaryMessage extends Component {
    constructor(props) {
        super(props);
    }

    text(){
        return this.props.status 
        ? this.props.status.messages.map((text, i)=>{return <Text style={styles.text} key={i}>{text}</Text>}) 
        : <Text/>
        
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.title ? <Text style={styles.title}>{this.props.title}</Text> : false}
                <ScrollView style={{}} contentContainerStyle={{alignItems: "center"}}>
                    {this.props.status ? (
                        <FontAwesome {...this.props.status.face} style={styles.face} />
                    ) : (
                        <Text />
                    )}
                    <View style={styles.textContainer}>
                        {this.text()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default CanaryMessage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        marginVertical: 12,
        marginHorizontal: 16,
    },
    face: {
        flex: 3,
        marginVertical: 10,
        alignSelf: "center"
    },
    textContainer: {
        flex: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 16,
        fontFamily: "Lato-Regular",
        marginHorizontal: 30,
    },
    title:{
        fontSize: 16,
        fontFamily: "Lato-Regular",
        marginLeft: 10,
        marginTop: 3,
        fontWeight: "bold"
    }
});
