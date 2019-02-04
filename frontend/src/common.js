import { Alert, Platform, ToastAndroid } from "react-native";
import { NavigationActions, StackActions } from "react-navigation";

const server = "http://192.168.43.204:3000";

const geoToken = "AIzaSyAke6FU2OYZs-hqu0H6by3FhcZQEDmf_90";

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

function navigateAction(routeName, navigation) {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })]
    });

    navigation.dispatch(resetAction);
}

const colors = {
    primaryColor: "#7e57c2",
    primaryLightColor: "#b085f5",
    primaryDarkColor: "#4d2c91",
    secondaryColor: "#fff176",
    secondaryLightColor: "#ffffa8",
    secondaryDarkColor: "#cabf45",
    primaryTextColor: "#ffffff",
    secondaryTextColor: "#000000",
    smile_o: "#649AE8",
    meh_o: "#E8CE64",
    frown_o: "#E86464"
};

export {
    server,
    showError,
    showInfo,
    colors,
    validateEmail,
    validateName,
    validatePassword,
    isEquals,
    navigateAction,
    geoToken
};
