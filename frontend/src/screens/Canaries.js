import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Divider } from "react-native-elements";

import Header from "../components/Header.js";
import Status from "../components/Status";
import CanaryMessage from "../components/CanaryMessage";
import { colors } from "../common.js";
import Picker from "react-native-picker-select";
import { Pages } from "react-native-pages";

import {humidity, temperature, co, co2, nh3} from "../messages";

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
    humidity: 30,
    co: 1,
    co2: 1,
    nh3: 1
};

const status2 = {
    temperature: 2,
    humidity: 70,
    co: 2,
    co2: 2,
    nh3: 2
};

const status3 = {
    temperature: 3,
    humidity: 11,
    co: 3,
    co2: 3,
    nh3: 3
};
class Canaries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: true,
            status: {
                temperature: 0,
                humidity: 0,
                co: 0,
                co2: 0,
                nh3: 0
            },
            selectedCanary: "",
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

            text: ""
        };

        this.pickerProps = {
            onValueChange: this.onValueChange,
            items: this.state.data,
            placeholder: {},
            style: styles.picker
        };
    }

    componentDidMount(){
        this.setState({status: this.state.data[0].value.status});
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
                    <Picker {...this.pickerProps} style={{underline:{borderTopWidth: 0}}} />
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
    }
});
