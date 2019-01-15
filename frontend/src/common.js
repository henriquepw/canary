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

const colors = {
    primaryColor: "#7e57c2",
    primaryLightColor: "#b085f5",
    primaryDarkColor: "#4d2c91",
    secondaryColor: "#90caf9",
    secondaryLightColor: "#c3fdff",
    secondaryDarkColor: "#5d99c6",
    primaryTextColor: "#ffffff",
    secondaryTextColor: "#000000"
};

export { server, showError, showInfo, colors };
