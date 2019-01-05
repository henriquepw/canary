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

export { server, showError, showInfo };
