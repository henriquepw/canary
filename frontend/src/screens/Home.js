import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";


class Home extends Component {
    render() {
        return (
            <View style={{alignItems:"center"}}>
             <Image source={require("../../assets/imgs/logo.png")}
        style={{ heihgt: 150 }}/>
                <Text>Home</Text>           
            </View>
        );
    }
}

export default Home;