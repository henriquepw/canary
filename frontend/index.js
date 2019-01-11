import { AppRegistry } from "react-native";
import Authentication from "./src/screens/Authentication";
import { name as appName } from "./app.json";
import App from "./src/App.js";

AppRegistry.registerComponent(appName, () => App);
