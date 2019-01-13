import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";


class Settings extends Component {
    render() {
        return (
            <View style={{alignItems:"center", backgroundColor: "#5C6BC0", flex:1}}>
             <Image source={require("../../assets/imgs/logo.png")}
        style={{ width: 150,borderBottomWidth: 5,
            height: 80 }}/>
                <Text style={{fontSize: 30, color:"white"}}>Settings</Text>           
            </View>
        );
    }
}

export default Settings;