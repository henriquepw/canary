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
import CanaryRegister from "./screens/CanaryRegister";

const AppDrawerNavigator = createDrawerNavigator(
    {
        Autentication: { screen: Autentication },
        Home: { screen: Home },
        Settings: { screen: Settings },
        Profile: { screen: Profile },
        CanaryRegister: { screen: CanaryRegister }
    },
    {
        initialRouteName: "Autentication",
        contentComponent: CustomDrawerComponent
    }
);

const AppStackNavigator = createStackNavigator(
    {
        //Autentication: { screen: Autentication },
        Autentication: { screen: AppDrawerNavigator }
    },
    {
        headerMode: "none"
    }
);

export default createAppContainer(AppStackNavigator);
