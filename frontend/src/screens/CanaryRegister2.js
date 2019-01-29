import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Button from "react-native-smart-button";
import Geocoder from "react-native-geocoding";

import Input from "../components/Input";
import Header from "../components/Header";
import { colors, geoToken, server } from "../common";

export default class CanaryRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            street: "",
            neighborhood: "",
            num: "",
            city: "",
            latitude: "",
            longitude: ""
        };

        this.getData = this.getData.bind(this);
        this.sendData = this.sendData.bind(this);
    };

    sendData = async () => {
        canary = {
            name: this.state.name,
            latitude: this.state.latitude,
            longitude: this.state.longitude
        }
        // alert(JSON.stringify(canary));
        try {
            await axios.post(`${server}/canaries/`, canary);
            alert("Canário cadastrado com sucesso!");
        } catch (err) {
            alert("Não foi possível cadastrar o canário, tente novamente!");
        }
    };

    getData() {
        Geocoder.init(geoToken);
        navigator.geolocation.getCurrentPosition(
            data => {
                const latitude = data.coords.latitude;
                const longitude = data.coords.longitude;

                Geocoder.from(latitude, longitude)
                    .then(json => {
                        const res = json.results[0];
                        const state = this.state;

                        state.num = res.address_components[0].long_name;
                        state.street = res.address_components[1].long_name;
                        state.neighborhood = res.address_components[2].long_name;
                        state.city = res.address_components[3].long_name;
                        state.latitude = latitude;
                        state.longitude = longitude;

                        this.setState(state);
                    })
                    .catch(error => console.warn(error));
            },
            () => {
                alert(
                    "Não foi possivel encontrar sua localização, tente novamente."
                );
            }
        );
    };

    render() {
        return (
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
                <ScrollView>
                    <View style={styles.category}>
                        <Text style={[styles.text, { flex: 1 }]}>Apelido</Text>
                    </View>

                    <Input
                        textInput={{
                            style: styles.textInput,
                            placeholder: "Nome",
                            onChangeText: name => this.setState({ name })
                        }}
                    />

                    <View style={styles.category}>
                        <Text style={[styles.text, { flex: 1 }]}>Endereço</Text>
                    </View>

                    <Input
                        textInput={{
                            style: styles.textInput,
                            placeholder: "Cidade",
                            value: this.state.city,
                            onChangeText: city => this.setState({ city })
                        }}
                    />

                    <View style={styles.street}>
                        <Input
                            styleInput={{ flex: 7 }}
                            textInput={{
                                style: styles.textInput,
                                placeholder: "Rua",
                                value: this.state.street,
                                onChangeText: street =>
                                    this.setState({ street })
                            }}
                        />

                        <Input
                            styleInput={{ flex: 3 }}
                            textInput={{
                                style: styles.textInput,
                                placeholder: "Nº",
                                value: this.state.num,
                                onChangeText: num => this.setState({ num })
                            }}
                        />
                    </View>

                    <Input
                        textInput={{
                            style: styles.textInput,
                            placeholder: "Bairro",
                            value: this.state.neighborhood,
                            onChangeText: neighborhood =>
                                this.setState({ neighborhood })
                        }}
                    />
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button} onPress={this.getData}>
                            <Text style={styles.buttonText}>
                                Localizar Canário
                            </Text>
                        </Button>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button}
                            onPress={this.sendData}>
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        </Button>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryLightColor
    },
    body: {
        flex: 1
    },
    category: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 16,
        paddingHorizontal: 16,
        height: 46
    },
    text: {
        color: colors.secondaryTextColor,
        fontSize: 16,
        fontFamily: "Lato-Bold"
    },
    textInput: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
        fontFamily: "Lato-Regular"
    },
    street: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    button: {
        backgroundColor: colors.primaryColor,
        width: 140,
        height: 36,
        justifyContent: "center",
        marginTop: 40
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold"
    },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center"
    }
});
