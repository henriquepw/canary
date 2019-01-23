import {
    createStackNavigator,
    createDrawerNavigator,
    createAppContainer
} from "react-navigation";

import About from "./screens/About";
import Autentication from "./screens/Authentication";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import SplashScreen from "./screens/SplashScreen";

import CustomDrawerComponent from "./components/CustomDrawerContent";
import CanaryRegister2 from "./screens/CanaryRegister2";
import Canaries from "./screens/Canaries";
import Maps from "./screens/Maps";

const AppDrawerNavigator = createDrawerNavigator(
    {
        About: { screen: About },
        Autentication: { screen: Autentication },
        Home: { screen: Home },
        Profile: { screen: Profile },
        CanaryRegister2: { screen: CanaryRegister2 },
        SeeCanaries: { screen: Canaries },
        Maps: { screen: Maps }
    },
    {
        initialRouteName: "Home",
        contentComponent: CustomDrawerComponent
    }
);

const AppStackNavigator = createStackNavigator(
    {
        SplashScreen: { screen: SplashScreen },
        Autentication: { screen: Autentication },
        Home: { screen: AppDrawerNavigator }
    },
    {
        headerMode: "none"
    }
);

export default createAppContainer(AppStackNavigator);
