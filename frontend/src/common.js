import { Alert, Platform, ToastAndroid } from "react-native";

const server = "http://192.168.0.198:3000";

function showError(err) {
    Alert.alert("Desculpe, aconteceu um problema", `Mensagem: ${err}`);
}

function showInfo(msg) {
    if (Platform.OS === "android") {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
        Alert.alert("informação", msg);
    }
}

function validateName(name) {
    const re = /\d+/;
    return name.length && !re.test(name);
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 5;
}

function isEquals(valueA, valueB) {
    return valueA == valueB;
}

const colors = {
    primaryColor: "#7e57c2",
    primaryLightColor: "#b085f5",
    primaryDarkColor: "#4d2c91",
    secondaryColor: "#649AE8",
    secondaryLightColor: "#c3fdff",
    secondaryDarkColor: "#5d99c6",
    primaryTextColor: "#ffffff",
    secondaryTextColor: "#000000"
};

export { 
    server, 
    showError, 
    showInfo, 
    colors,
    validateEmail,
    validateName,
    validatePassword,
    isEquals
};
