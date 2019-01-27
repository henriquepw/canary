import React from "react";

import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    AsyncStorage
} from "react-native";

import axios from "axios";

import { colors, navigateAction, server } from "../common";
import DrawerItem from "../components/DrawerItem";
import CanaryOptions from "../components/CanaryOptions.js";

const CustomDrawerComponent = props => {
    const logout = () => {
        delete axios.defaults.headers.common["Authorization"];

        AsyncStorage.removeItem("userData");

        navigateAction("Autentication", props.navigation);
    };

    const deleteAcount = async () => {
        const json = await AsyncStorage.getItem("userData");
        const userData = JSON.parse(json) || {};

        axios
            .delete(`${server}/canaries/${userData.id}`)
            .then(res => {
                AsyncStorage.removeItem("userData");
                navigateAction("Autentication", props.navigation);
            })
            .catch(err => {});
    };

    return (
        <View
            style={styles.container}
            forceInset={{ top: "always", horizontal: "never" }}
        >
            <View style={styles.innerContainer}>
                <ScrollView styles={{ flex: 1 }}>
                    <Image
                        source={require("../../assets/imgs/logo.png")}
                        style={styles.logo}
                    />

                    <View style={styles.divider} />

                    <DrawerItem
                        name="Home"
                        iconFamily="SimpleIcon"
                        iconName="home"
                        onPress={() => props.navigation.navigate("Home")}
                    />

                    <CanaryOptions
                        ver={() => props.navigation.navigate("SeeCanaries")}
                        adicionar={() =>
                            props.navigation.navigate("CanaryRegister2")
                        }
                        remover={() =>
                            props.navigation.navigate("RemoveCanary")
                        }
                    />

                    {/*
                    <DrawerItem
                        name="Mapa"
                        iconFamily="MaterialCommunityIcons"
                        iconName="map-marker-outline"
                    />
                    */}

                    <DrawerItem
                        name="Perfil"
                        iconFamily="AntDesign"
                        iconName="user"
                        onPress={() => props.navigation.navigate("Profile")}
                    />
                </ScrollView>

                <View styles={{ marginBottom: 5 }}>
                    <Text style={styles.system}>Sistema</Text>

                    <DrawerItem
                        name="Sobre"
                        iconFamily="SimpleIcon"
                        iconName="exclamation"
                        onPress={() => props.navigation.navigate("About")}
                    />

                    <DrawerItem
                        name="Excluir Conta"
                        iconFamily="FontAwesome"
                        iconName="trash-o"
                        iconColor={"#f1c484"}
                        iconSize={23}
                        iconStyle={{ marginLeft: 18, marginRight: 14 }}
                        textStyle={[styles.item, styles.delete]}
                    />

                    <View style={styles.divider} />

                    <View style={{ marginBottom: 8 }}>
                        <DrawerItem
                            name="Sair"
                            iconFamily="SimpleIcon"
                            iconName="logout"
                            onPress={logout}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CustomDrawerComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: colors.primaryColor,
        color: "#fff"
    },
    innerContainer: {
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 5
    },
    logo: {
        width: 150,
        height: 80,
        marginTop: 16,
        marginBottom: 6,
        marginHorizontal: 65,
        borderBottomWidth: 50,
        borderColor: "#fff"
    },
    item: {
        color: "#fff",
        marginLeft: 10,
        fontSize: 16
    },
    divider: {
        borderColor: "rgba(255, 255, 255, 0.5)",
        height: 0,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 6
    },
    margin: {
        marginHorizontal: 15
    },
    system: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        color: colors.secondaryTextColor,
        paddingLeft: 10,
        marginBottom: 6,
        fontSize: 16,
        fontWeight: "bold",
        paddingVertical: 7
    },
    delete: {
        color: "#f1c484"
    }
});
