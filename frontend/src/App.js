import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image, Container, Content, ScrollView, SafeAreaView, AppContainer } from "react-native";
import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";
import Autentication from "./screens/Authentication.js";
import Home from "./screens/Home.js";


const CustomDrawerComponent = (props) => (
    <View style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <Image source={require("../assets/imgs/logo.png")}
        style={{}}/>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
        <Text>Text</Text>
    </View>
);




const AppDrawerNavigator = createDrawerNavigator({
    Home: { screen: Home },
},
{
    initialRouteName: "Home",
    contentComponent: CustomDrawerComponent
}
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



export default createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5C6BC0"
    },
    
});
