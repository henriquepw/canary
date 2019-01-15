import {
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer
} from "react-navigation";

import Autentication from "./screens/Authentication";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Profile from "./screens/Profile";

import CustomDrawerComponent from "./components/CustomDrawerContent";

const AppDrawerNavigator = createDrawerNavigator(
    {
        Home: { screen: Home },
        Settings: { screen: Settings },
        Profile: { screen: Profile }
    },
    {
        initialRouteName: "Profile",
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
