import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image, Container, Content, ScrollView, TouchableOpacity, AppContainer } from "react-native";
import { createStackNavigator, createDrawerNavigator, createAppContainer, NavigationActions } from "react-navigation";
import Autentication from "./screens/Authentication.js";
import Home from "./screens/Home.js";
import Settings from "./screens/Settings.js";

import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";



const CustomDrawerComponent = (props) => (
    <View style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <ScrollView styles={{flex: 1}}>
            <Image source={require("../assets/imgs/logo.png")}
            style={styles.logo}/>
            <Text style={[styles.border, styles.margin]}></Text>

            <TouchableOpacity style={styles.itemContainer} onPress={()=>{props.navigation.navigate("Home")}}>
                <SimpleIcon name="home" color="white" size={20} style={styles.icon}/> 
                <Text style={styles.item} >Home</Text>
            </TouchableOpacity>
            
            <View style={styles.itemContainer}>
                <AntDesign name="yuque" color="white" size={20} style={styles.icon}/>
                <Text style={styles.item}>Canarios</Text>
            </View>

            <Text style={[styles.border, styles.margin]}></Text>

            <TouchableOpacity style={styles.itemContainer}>
                <MaterialCommunityIcons name="map-marker-outline" color="white" size={20} style={styles.icon}/>
                <Text style={styles.item}>Mapa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemContainer} onPress={()=>{props.navigation.navigate("Settings")}}>
                <AntDesign name="user" color="white" size={20} style={styles.icon}/>
                <Text style={[styles.item]}>Perfil</Text>
            </TouchableOpacity>
        </ScrollView>


        <View styles={{flex: 1}}>
            <Text style={styles.sistema}>Sistema</Text>
            <TouchableOpacity style={styles.itemContainer}>
                <SimpleIcon name="exclamation" color="white" size={20} style={{marginLeft:27}}/>
                <Text style={styles.item}>Sobre</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemContainer}>
                <Octicons name="trashcan" color="#f1c484" size={20} style={styles.icon}/>
                <Text style={[styles.item, styles.delete]}>Excluir Conta</Text>
            </TouchableOpacity>

            <Text style={styles.border}></Text>
            
            <TouchableOpacity style={[styles.itemContainer, {marginBottom: 8, marginTop: 8}]}>
                <SimpleIcon name="logout" color="white" size={20} style={{marginLeft:25}}/>
                <Text style={styles.item}>Sair</Text>
            </TouchableOpacity>
        </View>  
    </View>
);


/*

dove
crow
*/

const AppDrawerNavigator = createDrawerNavigator({
    Home: { screen: Home },
    Settings: { screen: Settings},
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
        justifyContent: "space-between",
       /* alignItems: "center",*/
        backgroundColor: "#5C6BC0",
        color: "white"
    },
    logo: {
        width: 150,
        height: 80,
        marginTop: 15,
        marginHorizontal: 65,
        borderBottomWidth: 50,
        borderColor: "white",
    },
    item: {
        color: "white", 
        marginLeft: 10,
        fontSize: 16,
        
    },
    border: {
        borderBottomWidth: 2,
        borderColor: "#a8b0de",   
        paddingVertical: 0,
        marginVertical: -5,  
    },
    margin: {
        marginHorizontal: 15,
    },
    sistema: {
        backgroundColor: "#aeb5df",
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: "bold",
        paddingVertical: 7,
    },
    delete: {
        color:"#f1c484",
    },
    icon: {
        marginLeft: 30
    },
    itemContainer: {
        flexDirection:'row', 
        flexWrap:'wrap',
        marginTop: 8,
        paddingVertical: 1,
    }
    
});
