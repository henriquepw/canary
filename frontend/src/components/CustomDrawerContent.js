import React from "react";

import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from "react-native";

import DrawerItem from "../components/DrawerItem.js";

const CustomDrawerComponent = props => (
    <View
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
    >
        <ScrollView styles={{ flex: 1 }}>
            <Image
                source={require("../../assets/imgs/logo.png")}
                style={styles.logo}
            />
            <Text style={[styles.border, styles.margin]} />

            <DrawerItem
                name="Home"
                iconFamily="SimpleIcon"
                iconName="home"
                onPress={() => {
                    props.navigation.navigate("Home");
                }}
            />

            <DrawerItem
                name="Canarios"
                iconFamily="AntDesign"
                iconName="yuque"
            />

            <Text style={[styles.border, styles.margin]} />

            <DrawerItem
                name="Mapa"
                iconFamily="MaterialCommunityIcons"
                iconName="map-marker-outline"
            />

            <DrawerItem
                name="Perfil"
                iconFamily="AntDesign"
                iconName="user"
                onPress={() => {
                    props.navigation.navigate("Settings");
                }}
            />
        </ScrollView>

        <View styles={{ flex: 1 }}>
            <Text style={styles.sistema}>Sistema</Text>

            <DrawerItem
                name="Sobre"
                iconFamily="SimpleIcon"
                iconName="exclamation"
                iconStyle={{ marginLeft: 27 }}
            />

            <DrawerItem
                name="Excluir Conta"
                iconFamily="Octicons"
                iconName="trashcan"
                iconColor={"#f1c484"}
                textStyle={[styles.item, styles.delete]}
            />

            <Text style={styles.border} />

            <DrawerItem
                name="Sair"
                iconFamily="SimpleIcon"
                iconName="logout"
                iconStyle={{ marginLeft: 25 }}
                containerStyle={{ marginBottom: 8, marginTop: 8 }}
            />
        </View>
    </View>
);

export default CustomDrawerComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#5C6BC0",
        color: "white"
    },
    logo: {
        width: 150,
        height: 80,
        marginTop: 15,
        marginHorizontal: 65,
        borderBottomWidth: 50,
        borderColor: "white"
    },
    item: {
        color: "white",
        marginLeft: 10,
        fontSize: 16
    },
    border: {
        borderBottomWidth: 2,
        borderColor: "#a8b0de",
        paddingVertical: 0,
        marginVertical: -5
    },
    margin: {
        marginHorizontal: 15
    },
    sistema: {
        backgroundColor: "#aeb5df",
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: "bold",
        paddingVertical: 7
    },
    delete: {
        color: "#f1c484"
    }
});
