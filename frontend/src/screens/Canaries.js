import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Divider } from "react-native-elements";

import Header from "../components/Header.js";
import Status from "../components/Status";
import CanaryMessage from "../components/CanaryMessage";
import { colors } from "../common.js";
import Picker from "react-native-picker-select";
import { Pages } from "react-native-pages";

import { humidity, temperature, co, co2, nh3 } from "../messages";
import { getAllCanaries } from "../services/canaries.service"

loaded = false;
class Canaries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            status: {
                temperature: 0,
                humidity: 0,
                co: 0,
                co2: 0,
                nh3: 0
            },
            selectedCanary: "",
            data: [{label: "carregando", value: {}}],
            data2: [{label: "carregando2", value: {}}],
            text: ""
        };

        this.pickerProps = {
            onValueChange: this.onValueChange,
            items: this.state.data,
            placeholder: {},
            style: styles.picker
        };
        this.pickerProps2 = {
            onValueChange: this.onValueChange,
            items: this.state.data2,
            placeholder: {},
            style: styles.picker
        }

    }

    componentWillMount(){
       /* new Promise((resolve, reject)=>{this.state.data.push(... getAllCanaries()); this.state.data.shift(); resolve()})
        .then(()=>loaded = true)
        .catch(()=>alert("fail"));*/
        new Promise((resolve,reject)=>setTimeout(()=>{this.state.data.push(... getAllCanaries()); this.state.data.shift(); resolve()},3000))
        .then(()=>{this.setState({loaded: true});})
        .catch(()=>alert("fail"));
    }

    componentDidMount(){
        
        
        //this.state.data.shift();
        //this.setState({selectedCanary: "jorge"});
        //this.setState({ selected: false });

        //this.setState({status: this.state.data[0].value.status});
    }

    onValueChange = (value, index) => {
        this.setState({ text: value.text, status: value.status });
    };

    render() {
        return (
            <View style={styles.container}>
                <Header
                    iconLeft="menu"
                    onPressLeft={this.props.navigation.openDrawer}
                />
                <View style={styles.picker}>
                    {this.state.loaded ? <Picker {...this.pickerProps} style={{underline:{borderTopWidth: 0}}} /> : <Text style={styles.loading}>Carregando</Text>}
                    
                    
                </View>
                <Divider style={styles.divider} />
                <Status {...this.state.status} />
                <Pages containerStyle={{ paddingBottom: 25 }}>
                    <CanaryMessage status={temperature(this.state.status.temperature)} />
                    <CanaryMessage status={humidity(this.state.status.humidity)} />
                    <CanaryMessage status={co(this.state.status.co)} />
                    <CanaryMessage status={co2(this.state.status.co2)} />
                    <CanaryMessage status={nh3(this.state.status.nh3)} />
                </Pages>
            </View>
        );
    }
}

export default Canaries;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryLightColor
    },
    divider: {
        height: 2,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        marginHorizontal: 16,
        marginVertical: 12
    },
    picker: {
        backgroundColor: "white",
        marginHorizontal: 16,
        marginTop: 12
    },
    loading: {
        paddingVertical: 16,
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Lato-Regular"
    }
});
