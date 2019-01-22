import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";


smileProps = {
    name: "smile-o",
    size: 125,
    color: "#649ae8"
};

mehProps = {
    name: "meh-o",
    size: 125,
    color: "#ff982b"
}

frownProps = {
    name: "frown-o",
    size: 125,
    color: "red"
}

class CanaryMessage extends Component{
    constructor (props){
        super(props);
    }
    
    
    render(){return(
        <View style={styles.container}>
            {(this.props.text) ? <FontAwesome {... smileProps} style={styles.face}/> : <Text></Text>}
            <View style={styles.textContainer}>
                <Text style={styles.text}>{this.props.text}</Text>
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