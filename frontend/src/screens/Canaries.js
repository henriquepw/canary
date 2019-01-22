import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Divider } from "react-native-elements";
import { Dropdown} from "react-native-material-dropdown";

import Header from "../components/Header.js";
import Status from "../components/Status";
import CanaryMessage from "../components/CanaryMessage";
import { colors } from "../common.js";
import Picker from "react-native-picker-select";
import {Pages} from "react-native-pages";

const text1 = {temperature: "temperature text 1", 
humidity:"humidity text 1", 
co:"co text 1", 
co2:"co2 text 1", 
nh3:"nh3 text 1"};

const text2 = {temperature: "temperature text 2", 
humidity:"humidity text 2", 
co:"co text 2", 
co2:"co2 text 2", 
nh3:"nh3 text 2"};

const text3 = {temperature: "temperature text 3", 
humidity:"humidity text 3", 
co:"co text 3", 
co2:"co2 text 3", 
nh3:"nh3 text 3"};

const status1 = {
    temperature: 1,
    humidity: 1,
    co: 1,
    co2: 1,
    nh3: 1,
}; 

const status2 = {
    temperature: 2,
    humidity: 2,
    co: 2,
    co2: 2,
    nh3: 2,
}; 

const status3 = {
    temperature: 3,
    humidity: 3,
    co: 3,
    co2: 3,
    nh3: 3,
}; 
class Canaries extends Component{

    constructor(props){
        super(props);
        this.state = {
            selected: true,
            status: {
                temperature: "",
                humidity: "",
                co: "",
                co2: "",
                nh3: "",
            },
            selectedCanary: "",
            data: [{label:"Canario1", value: {text: text1, id:1, status: status1},},
                   {label:"Canario2", value: {text: text2, id:2, status: status2},},
                   {label:"Canario3", value: {text: text3, id:3, status: status3},},
                  ], 

            text: "",
        };

        this.pickerProps ={
            onValueChange: this.onValueChange, 
            items: this.state.data,
            placeholder: {},
            style: styles.picker,
        };
    }

    onValueChange = (value, index) => {this.setState({ text: value.text, 
                                                       status: value.status})}

    render(){return(
        <View style={styles.container}>
            <Header
                    iconLeft="menu"
                    iconRight="social-twitter"
                    onPressLeft={this.props.navigation.openDrawer}
                    onPressRight={() => this.props.navigation.navigate("CanaryRegister")}
            />
            <View style={styles.picker}>
                <Picker {...this.pickerProps}/>
            </View>
            <Divider style={styles.divider}/>
            <Status {...this.state.status}/>
            <Pages containerStyle={{paddingBottom: 25}}>
                <CanaryMessage text={this.state.text.temperature}/>
                <CanaryMessage text={this.state.text.humidity}/>
                <CanaryMessage text={this.state.text.co}/>
                <CanaryMessage text={this.state.text.co2}/>
                <CanaryMessage text={this.state.text.nh3}/>
            </Pages>
        </View>
    )};
}


export default Canaries;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryLightColor,
    },
    divider: {
        height: 2,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        marginHorizontal: 16,
        marginVertical: 12,
    },
    picker: {
        backgroundColor: "white",
        marginHorizontal: 16,
        marginTop: 12,
    },  

});