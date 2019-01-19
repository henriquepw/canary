import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Button from "react-native-smart-button";
import { Input } from "react-native-elements";
import Geocoder from 'react-native-geocoding';

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
        navigator.geolocation.getCurrentPosition((data) => {

            let latitude = data.coords.latitude;
            let longitude = data.coords.longitude;

            Geocoder.from(latitude, longitude)
                .then(json => {
                    let s = this.state;

                    var adress = JSON.stringify(json.results[0].address_components);

                    var numero = (json.results[0].address_components[0]).long_name;
                    var rua = (json.results[0].address_components[1]).long_name;
                    var bairro = (json.results[0].address_components[2]).long_name;

                    //alert(numero);
                    alert(adress);

                    s.numero = numero;
                    s.rua = rua;
                    s.bairro = bairro;

                    this.setState(s);
                })
                .catch(error => console.warn(error));
        }, () => {
            alert("Deu erro")
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    iconLeft="arrow-left"
                    iconRight="social-twitter"
                    onPressLeft={() => this.props.navigation.navigate("Home")}
                    onPressRight={() => this.props.navigation.navigate("CanaryRegister")}
                />
                <ScrollView>
                    <View style={styles.body}>
                        <View style={styles.bairroNum}>
                            <Input
                                placeholder="Nome"
                                containerStyle={{ width: 140, margin: 10 }}
                                value={this.state.nome}
                                onChangeText={nome => this.setState({nome})}
                            />
                            <Input
                                placeholder="Codigo"
                                containerStyle={{ width: 80, margin: 10 }}
                                value={this.state.codigo}
                                onChangeText={codigo => this.setState({codigo})}
                            />
                        </View>
                        <Text style={styles.text}>
                            Preencha com o Endereço do Canário
                        </Text>
                        <View style={styles.innerBody}>
                            <View style={styles.bairroNum}>
                                <Input
                                    placeholder="Bairro"
                                    containerStyle={{ width: 150, margin: 10 }}
                                    value={this.state.bairro}
                                    onChangeText={bairro =>
                                        this.setState({bairro})
                                    }
                                />
                                <Input
                                    placeholder="Nº"
                                    containerStyle={{ width: 80, margin: 10 }}
                                    value={this.state.numero}
                                    onChangeText={numero =>
                                        this.setState({numero})
                                    }
                                />
                            </View>
                            <View style={styles.rua}>
                                <Input
                                    placeholder="Rua"
                                    containerStyle={{ width: 250, margin: 10 }}
                                    value={this.state.numero}
                                    value={this.state.rua}
                                    onChangeText={rua => this.setState({rua})}
                                />
                            </View>
                        </View>
                        <Text style={styles.text}>
                            Ou Ative Sua Localização
                        </Text>
                        <View style={styles.buttonContainer}>
                            <Button style={styles.button} onPress={this.getData}>
                                <Text>Ativar GPS</Text>
                            </Button>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.footer}>
                            <Button style={styles.register}>
                                <Text style={styles.buttonText}>Cadastrar</Text>
                                
                            </Button>
                        </View>
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
        margin: 35,
        paddingTop: 10,
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        borderRadius: 5
    },
    text: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: "bold"
    },
    bairroNum: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rua: {
        marginTop: 10
    },
    innerBody: {
        marginTop: 25,
        borderWidth: 1,
        borderRadius: 5
    },
    line: {
        marginTop: 30,
        borderWidth: 0.5,
        height: 1,
        width: 200
    },
    buttonContainer: {
        marginTop: 10
    },
    button: {
        backgroundColor: "#7e57c2",
        width: 100,
        height: 36,
        justifyContent: "center",
        borderRadius: 4
    },
    register: {
        backgroundColor: "#7e57c2",
        width: 150,
        height: 40,
        justifyContent: "center",
        borderRadius: 4
    },
    footer: {
        alignItems: "flex-end",
        marginBottom: 10,
        marginTop: 20
    }
});
