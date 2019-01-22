import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Divider } from "react-native-elements";
import { Dropdown} from "react-native-material-dropdown";

import Header from "../components/Header.js";
import Status from "../components/Status";
import CanaryMessage from "../components/CanaryMessage";
import { colors } from "../common.js";
import Picker from "react-native-picker-select";

const changeText = (newText)=>{this.setState({ text: newText })};
class Canaries extends Component{

    constructor(props){
        super(props);
        this.state = {
            selected: true,
            status: {
                temperature: 0,
                humidity: 0,
                co: 0,
                co2: 0,
                nh3: 0,
            },
            selectedCanary: "",
            data: [{label:"Canario1", value: {text: "Texto1 Texto1 Texto1", id:1,},}, 
                   {label:"Canario2", value: {text: "Texto2 Texto2 Texto2", id:2,},}, 
                   {label:"Canario3", value: {text: "Texto3 Texto3 Texto3", id:3,},}],
            text: "",
        };

        this.pickerProps ={
            onValueChange: this.onValueChange, 
            items: this.state.data,
            placeholder: {label: "Selecione um Canario", value: null},
            style: styles.picker,
        };
    }

    onValueChange = (value, index) => {this.setState({ text: value.text })}

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
            <CanaryMessage ref="message" text={this.state.text}/>
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