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
            name: "",
            street: "",
            neighborhood: "",
            num: "",
            city: "",
            uf: ""
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

                        var num =
                            json.results[0].address_components[0].long_name;
                        var street =
                            json.results[0].address_components[1].long_name;
                        var neighborhood =
                            json.results[0].address_components[2].long_name;
                        var city =
                            json.results[0].address_components[3].long_name;
                        var uf =
                            json.results[0].address_components[4].short_name;

                        alert(adress);

                        s.num = num;
                        s.street = street;
                        s.neighborhood = neighborhood;
                        s.city = city;
                        s.uf = uf;

                        this.setState(s);
                    })
                    .catch(error => console.warn(error));
            },
            () => {
                alert("Não foi possivel encontrar sua localização, tente novamente.");
            }
        );
    }

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

                    <View style={styles.street}>
                        <Input
                            styleInput={{ flex: 7 }}
                            textInput={{
                                style: styles.textInput,
                                placeholder: "Cidade",
                                value: this.state.city,
                                onChangeText: city => this.setState({ city })
                            }}
                        />
                        <Input
                            styleInput={{ flex: 3 }}
                            textInput={{
                                style: styles.textInput,
                                placeholder: "UF",
                                value: this.state.uf,
                                onChangeText: uf => this.setState({ uf })
                            }}
                        />

                    </View>

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
                        <Button style={styles.button}
                            onPress={this.getData}>
                            <Text style={styles.buttonText}>Localizar Canário</Text>
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
        marginTop: 40,
        borderRadius: 4
    },
    buttonText: {
        color: "#fff",
        fontWeight: 'bold'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
