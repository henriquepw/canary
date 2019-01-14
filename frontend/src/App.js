import {
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer
} from "react-navigation";

import Autentication from "./screens/Authentication.js";
import Home from "./screens/Home.js";
import Settings from "./screens/Settings.js";

import CustomDrawerComponent from "./components/CustomDrawerContent";

const AppDrawerNavigator = createDrawerNavigator(
    {
        Home: { screen: Home },
        Settings: { screen: Settings }
    },
    {
        initialRouteName: "Home",
        contentComponent: CustomDrawerComponent
    }
);

const AppStackNavigator = createStackNavigator(
    {
        Autentication: { screen: Autentication },
        Home: { screen: AppDrawerNavigator }
    },
    {
        headerMode: "none"
    }
);

export default createAppContainer(AppStackNavigator);
