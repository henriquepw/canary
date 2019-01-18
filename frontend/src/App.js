import {
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer
} from "react-navigation";

import Autentication from "./screens/Authentication";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import SplashScreen from "./screens/SplashScreen";

import CustomDrawerComponent from "./components/CustomDrawerContent";
import CanaryRegister from "./screens/CanaryRegister";

const AppDrawerNavigator = createDrawerNavigator(
    {
        Autentication: { screen: Autentication },
        Home: { screen: Home },
        Profile: { screen: Profile },
        CanaryRegister: { screen: CanaryRegister }
    },
    {
        initialRouteName: "Home",
        contentComponent: CustomDrawerComponent
    }
);

const AppStackNavigator = createStackNavigator(
    {
        SplashScreen: { screen: CanaryRegister },
        Autentication: { screen: Autentication },
        Home: { screen: AppDrawerNavigator }
    },
    {
        headerMode: "none"
    }
);

export default createAppContainer(AppStackNavigator);
