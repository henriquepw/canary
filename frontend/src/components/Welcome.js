import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "react-native-smart-button";

export default props => (
    <View style={styles.container}>
        <Text style={[styles.text, styles.welcome]}>Bem Vindo!</Text>
        <Text style={[styles.text, styles.msg]}>
            Voce ainda não tem canários cadastrados, {"\n"} que tal cadastrar
            um?
        </Text>
        <Button style={styles.button}>
            <Text style={styles.text}>Cadastrar</Text>
        </Button>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
        paddingHorizontal: 16
    },
    welcome: {
        fontSize: 40,
        paddingBottom: 30
    },
    msg: {
        fontSize: 30,
        paddingBottom: 30
    },
    button: {
        backgroundColor: "#7e57c2",
        height: 36,
        width: 200,
        justifyContent: "center"
    }
});
