import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import Picker from "react-native-picker-select"
import Button from "react-native-smart-button";

import { colors } from "../common.js";
import Header from "../components/Header"
import Input from "../components/Input";

class RemoveCanary extends Component{
    constructor(props){
        super(props);
        this.state = {
            street: "Rua",
            neighborhood: "Bairro",
            num: "Numero",
            city: "Cidade",
            uf: "UF",
            data: [
                {
                    label: "Canario1",
                    value: { text: text1, id: 1, status: status1 }
                },
                {
                    label: "Canario2",
                    value: { text: text2, id: 2, status: status2 }
                },
                {
                    label: "Canario3",
                    value: { text: text3, id: 3, status: status3 }
                }
            ],
        };
        this.pickerProps = {
            onValueChange: this.onValueChange,
            items: this.state.data,
            placeholder: {},
            style: styles.picker
        };
    }

    onValueChange(value, index){

    }

    render(){return(
        <View style={styles.container}>

            <Header
                    iconLeft="menu"
                    iconRight="yuque"
                    iconRightFamily="AntDesign"
                    onPressLeft={this.props.navigation.openDrawer}
                    onPressRight={() =>
                        this.props.navigation.navigate("SeeCanaries")
                    }
            />
            <View style={styles.picker}>
                <Picker {...this.pickerProps} style={{underline:{borderTopWidth: 0}}} />
            </View>

            <View style={styles.category}>
                    <Text style={[styles.text, { flex: 1 }]}>Endereço</Text>
            </View>

            <View style={{}}>
                <View style={styles.street}>
                    <View style={[styles.infoContainer, {flex: 7}]}>
                        <Text style={styles.text}>Cidade</Text>
                        <Text style={styles.info}>{this.state.city}</Text>
                    </View>
                    <View style={[styles.infoContainer, {flex: 3}]}>
                        <Text style={styles.text}>UF</Text>
                        <Text style={styles.info}>{this.state.uf}</Text>
                    </View>  
                </View>

                <View style={styles.street}>
                    <View style={[styles.infoContainer, {flex: 7}]}>
                        <Text style={styles.text}>Rua</Text>
                        <Text style={styles.info}>{this.state.street}</Text>
                    </View>
                    <View style={[styles.infoContainer, {flex: 3}]}>
                        <Text style={styles.text}>Nº</Text>
                        <Text style={styles.info}>{this.state.num}</Text>
                    </View>  
                </View>

                <View style={styles.street}>
                    <View style={[styles.infoContainer, {flex: 7}]}>
                        <Text style={styles.text}>Bairro</Text>
                        <Text style={styles.info}>{this.state.neighborhood}</Text>
                    </View>
                </View>
            </View>
                   
        </View>
    )
    }
}

export default RemoveCanary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryLightColor,
    },
    infoContainer:{
        marginHorizontal: 16,
    },
    picker: {
        backgroundColor: "white",
        marginHorizontal: 16,
        marginTop: 12
    },
    category: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 16,
        paddingHorizontal: 16,
        height: 46
    },
    textBar:{
        color: colors.secondaryTextColor,
        fontSize: 16,
        fontFamily: "Lato-Bold"
    },
    text: {
        color: colors.secondaryTextColor,
        fontSize: 13,
        fontFamily: "Lato-Bold"
    },
    textInput: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
        fontFamily: "Lato-Regular"
    },
    street: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
    },
    info: {
        borderBottomWidth: 2,
        borderBottomColor: "rgba(255, 255, 255, 0.5)",
        color: colors.primaryTextColor,
        fontSize: 16,
        fontFamily: "Lato-Bold",
        height: 30,
        marginTop: 2,
    }

    
});

const text1 = {
    temperature: "temperature text 1",
    humidity: "humidity text 1",
    co: "co text 1",
    co2: "co2 text 1",
    nh3: "nh3 text 1"
};

const text2 = {
    temperature: "temperature text 2",
    humidity: "humidity text 2",
    co: "co text 2",
    co2: "co2 text 2",
    nh3: "nh3 text 2"
};

const text3 = {
    temperature: "temperature text 3",
    humidity: "humidity text 3",
    co: "co text 3",
    co2: "co2 text 3",
    nh3: "nh3 text 3"
};

const status1 = {
    temperature: 1,
    humidity: 1,
    co: 1,
    co2: 1,
    nh3: 1
};

const status2 = {
    temperature: 2,
    humidity: 2,
    co: 2,
    co2: 2,
    nh3: 2
};

const status3 = {
    temperature: 3,
    humidity: 3,
    co: 3,
    co2: 3,
    nh3: 3
};