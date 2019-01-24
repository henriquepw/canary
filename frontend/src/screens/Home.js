import React, { Component } from "react";
import { StyleSheet, View, Alert, AsyncStorage } from "react-native";
import axios from "axios";

import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Resume from "../components/Resume";

import { colors, server } from "../common";

export default class Home extends Component {
    state = {
        first: false,
        userData: {}
    };

    getUserData = async () => {
        const json = await AsyncStorage.getItem("userData");
        const userData = JSON.parse(json) || {};

        this.setState({ userData });
    };

    checkCanaries = () => {
        this.getUserData();

        axios
            .get(`${server}/canaries/owner/${this.state.userData.id}`)
            .then(res =>
                this.setState({ first: res.data.length ? false : true })
            );
    };

    componentWillMount() {
        this.checkCanaries();
    }

    render() {
        const { first } = this.state;

        return (
            <View style={styles.container}>
                <Header
                    iconLeft="menu"
                    iconRight="social-twitter"
                    onPressLeft={this.props.navigation.openDrawer}
                    onPressRight={() =>
                        this.props.navigation.navigate("SeeCanaries")
                    }
                />
                {first ? <Welcome /> : <Resume />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryLightColor
    }
});
