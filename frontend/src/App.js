import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import Autentication from "./screens/Authentication.js";
import Home from "./screens/Home.js";


class DrawerComponent extends Component {
    render() {
        return (
            <View>
                <Image source/>
            </View>
        );
    }
}



const AppDrawerNavigator = createDrawerNavigator({
    Home: { screen: Home },
},
);

const AppStackNavigator = createStackNavigator(
    {
        Autentication: { screen: Autentication },
        Home: { screen: AppDrawerNavigator }
    },
    {
        headerMode: "none",
    }
);

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
