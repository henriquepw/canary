import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Divider } from "react-native-elements";
import { Dropdown} from "react-native-material-dropdown";

import Header from "../components/Header.js";
import { colors } from "../common.js";



class Canaries extends Component{
    state = {
        selected: true,
        temperature: 0,
        Humidity: 0,
        co: 0,
        co2: 0,
        nh3: 0,
        selectedCanary: "",
        data: [{value: "Canario1", canary:"valor 1"}, {value: "Canario2", canary: "valor2"}, {value: "Canario3", canary: "valor3"}]
    }

    dropdownProps = {
        label:"Selecione",
        data: this.state.data,
        containerStyle: styles.dropdown,
        overlayStyle: styles.overlay,
        pickerStyle: styles.picker,
        //textColor: "white"
        baseColor: "black",
        //selectedItemColor: "yellow",
        dropdownOffset: { top: 2, left: 0, bottom: -5},
        rippleInsets: { top: 0, bottom: 0 },
        valueExtractor: this.valueExtractor,
    }

    valueExtractor = ({ canary }) => canary;

    

    render(){return(
        <View style={styles.container}>
            <Header/>
            <Dropdown {... this.dropdownProps} ref="dropdown"/>
            <Divider style={styles.divider}/>
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
    },
    dropdown: {
        backgroundColor: "white",//colors.primaryLightColor,
        marginHorizontal: 16,
        marginTop: 20,
        borderRadius: 5,
    },
    picker: {
        marginTop: 0,
        backgroundColor: colors.primaryLightColor,
    },

    overlay: {
        ...StyleSheet.absoluteFillObject
    }

});