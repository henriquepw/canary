import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Divider } from "react-native-elements";
import { Pages } from "react-native-pages";
import Picker from "react-native-picker-select";

import CanaryMessage from "../components/CanaryMessage";
import Header from "../components/Header.js";
import Status from "../components/Status";

import { colors } from "../common.js";

import {
    getHumidity,
    getTemperature,
    getCO,
    getCO2,
    getNH3
} from "../messages";

import { getCanariesByUser, getCanary } from "../services/canaries.service";

const nullStatus = {
    temperature: null,
    humidity: null,
    co: null,
    co2: null,
    nh3: null
};

loaded = false;
class Canaries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            status: {
                temperature: null,
                humidity: null,
                co: null,
                co2: null,
                nh3: null
            },
            selectedCanary: "",
            data: [{ label: "carregando", value: {} }],
            text: "Carregando",
            loadingStyle: styles.loading,
            mounted: true,
            keyValue: true,
            interval: "",
        };

        this.pickerProps = {
            onValueChange: this.onValueChange,
            items: this.state.data,
            placeholder: {},
            style: styles.picker
        };
    }

    onLoadingSuccess = () => {
        if (this.state.mounted) {
            this.setState({ loaded: true });
            this.state.interval && clearInterval(this.state.interval);
            this.setState({ interval: setInterval(() => this.updateInfo(this.state.data[0].value.id), 1000)});
        }
        
    }

    onLoadingFail = (err) => {
        alert(err);
        if (this.state.mounted) {
            this.setState({
                text: "Falha ao Carregar",
                loadingStyle: styles.failLoading
            });
        }
    }

    setData = data => {
        let canaries = data.map((canary) => {
            return {
                label: `${canary.name}`,
                value: {
                    id: canary.id,
                }
            }
        });
        this.state.data = canaries;
        this.pickerProps.items = canaries;
        this.setState({keyValue: !this.state.keyValue});
    }

    componentWillMount() {
        getCanariesByUser()
            .then(res => res.data)
            .then(data => {this.setData(data)})
            .then(() => {this.onLoadingSuccess()})
            .catch((err) => {this.onLoadingFail(err)});
    }

    componentDidMount() {}

    componentWillUnmount() {
        this.setState({ mounted: false });
    }

    setStatus(data){
        const status = {
            temperature: data.temperature,
            humidity: data.humidity,
            co: data.co,
            co2: data.co2,
            nh3: data.nh3
        };
        
        this.setState({ status });
    }

    updateInfo(id){
        getCanary(id)
            .then(res => res.data)
            .then(data => this.setStatus(data[0]))
            .catch((err) => alert(err));
    }

    onValueChange = value => {
        this.state.interval && clearInterval(this.state.interval);
        this.setState({ interval: setInterval(() => this.updateInfo(value.id), 1000)});
    };

    render() {
        return (
            <View style={styles.container}>
                <Header
                    iconLeft="menu"
                    onPressLeft={this.props.navigation.openDrawer}
                />
                <View style={styles.picker} key={this.state.keyValue}>
                    {this.state.loaded ? (
                        <Picker
                            {...this.pickerProps}
                            style={{ underline: { borderTopWidth: 0 } }}
                        />
                    ) : (
                        <Text style={this.state.loadingStyle}>
                            {this.state.text}
                        </Text>
                    )}
                </View>
                <Divider style={styles.divider} />
                <Status {...this.state.status} />
                <Pages containerStyle={{ paddingBottom: 25 }}>
                    <CanaryMessage
                        status={
                            this.state.status.temperature != null &&
                            getTemperature(this.state.status.temperature)
                        }
                        title="Temperatura"
                    />
                    <CanaryMessage
                        status={
                            this.state.status.humidity != null &&
                            getHumidity(this.state.status.humidity)
                        }
                        title="Umidade"
                    />
                    <CanaryMessage
                        status={
                            this.state.status.co != null &&
                            getCO(this.state.status.co)
                        }
                        title="CO"
                    />
                    <CanaryMessage
                        status={
                            this.state.status.co2 != null &&
                            getCO2(this.state.status.co2)
                        }
                        title="CO2"
                    />
                    <CanaryMessage
                        status={
                            this.state.status.nh3 != null &&
                            getNH3(this.state.status.nh3)
                        }
                        title="NH3"
                    />
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
    },
    failLoading: {
        paddingVertical: 16,
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Lato-Regular",
        color: "red"
    }
});
