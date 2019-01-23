import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Button from "react-native-smart-button";
import Geocoder from "react-native-geocoding";

import Input from "../components/Input";
import Header from "../components/Header";
import { colors } from "../common";

export default class CanaryRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codigo: "",
            nome: "",
            rua: "",
            bairro: "",
            numero: ""
        };

        this.getData = this.getData.bind(this);
    }

    getData() {
        Geocoder.init("AIzaSyAke6FU2OYZs-hqu0H6by3FhcZQEDmf_90");
        navigator.geolocation.getCurrentPosition(
            data => {
                let latitude = data.coords.latitude;
                let longitude = data.coords.longitude;

                Geocoder.from(latitude, longitude)
                    .then(json => {
                        let s = this.state;

                        var adress = JSON.stringify(
                            json.results[0].address_components
                        );

                        var numero =
                            json.results[0].address_components[0].long_name;
                        var rua =
                            json.results[0].address_components[1].long_name;
                        var bairro =
                            json.results[0].address_components[2].long_name;

                        //alert(numero);
                        alert(adress);

                        s.numero = numero;
                        s.rua = rua;
                        s.bairro = bairro;

                        this.setState(s);
                    })
                    .catch(error => console.warn(error));
            },
            () => {
                alert("Deu erro");
            }
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    iconLeft="menu"
                    iconRight="social-twitter"
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
                            onChangeText: city => this.setState({ city })
                        }}
                    />

                    <View style={styles.street}>
                        <Input
                            styleInput={{ flex: 7 }}
                            textInput={{
                                style: styles.textInput,
                                placeholder: "Rua",
                                onChangeText: street =>
                                    this.setState({ street })
                            }}
                        />

                        <Input
                            styleInput={{ flex: 3 }}
                            textInput={{
                                style: styles.textInput,
                                placeholder: "Nº",
                                onChangeText: num => this.setState({ num })
                            }}
                        />
                    </View>

                    <Input
                        textInput={{
                            style: styles.textInput,
                            placeholder: "Bairro",
                            onChangeText: neighborhood =>
                                this.setState({ neighborhood })
                        }}
                    />
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
    }
});
