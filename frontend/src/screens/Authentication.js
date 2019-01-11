import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
    Dimensions,
    Platform,
    LayoutAnimation,
    UIManager,
    KeyboardAvoidingView,
    Keyboard,
    ActivityIndicator,
    ActivityIndicatorIOS,
    ProgressBarAndroid
} from "react-native";

import { Input } from "react-native-elements";
//import Button from "react-native-button";
import Button from "react-native-smart-button";

import Icon from "react-native-vector-icons/FontAwesome";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";

import Orientation from "react-native-orientation";

import axios from "axios";
import { server, showError, showInfo } from "../common";

let SCREEN_WIDTH = Dimensions.get("window").width;
let SCREEN_HEIGHT = Dimensions.get("window").height;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

const TabSelector = ({ selected }) => (
    <View style={styles.selectorContainer}>
        <View style={selected && styles.selected} />
    </View>
);

export default class Authentication extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isLoading: false,
        selectedStage: false,
        isHider: false,
        isNameValid: true,
        isEmailValid: true,
        isPasswordValid: true,
        isConfirmPasswordValid: true
    };

    componentWillMount() {
        const initial = Orientation.getInitialOrientation();
        /*if (initial === "LANDSCAPE") {
            orient = false;
        }*/
        Orientation.lockToPortrait();
    }

    componentDidMount() {
        Orientation.lockToPortrait();

        this.keyboardDidShowListiner = Keyboard.addListener(
            "keyboardDidShow",
            this._keyboardDidShow
        );
        this.keyboardDidHideListiner = Keyboard.addListener(
            "keyboardDidHide",
            this._keyboardDidHide
        );
        
    }

    _keyboardDidShow = () => {
        this.setState({
            isHider: true
        });
    };

    _keyboardDidHide = () => {
        this.setState({
            isHider: false
        });
    };

    _renderLoadingComponent = () => {
        return ActivityIndicator ? (
            <ActivityIndicator
                style={{ margin: 10 }}
                animating={true}
                color={"#464646"}
                size={"small"}
            />
        ) : Platform.OS == "android" ? (
            <ProgressBarAndroid
                style={{ margin: 10 }}
                color={"#464646"}
                styleAttr={"Small"}
            />
        ) : (
            <ActivityIndicatorIOS
                style={{ margin: 10 }}
                animating={true}
                color={"#464646"}
                size={"small"}
            />
        );
    };

    componentWillUnmount() {}

    selectCategory = selectedStage => {
        LayoutAnimation.easeInEaseOut();
        this.setState({
            selectedStage
        });
    };

    validateName(name) {
        const re = /\d+/;
        return name.length && !re.test(name);
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validatePassword(password) {
        return password.length >= 5;
    }

    isEquals(password, confirmPassword) {
        return password == confirmPassword;
    }

    login = async (email, password) => {
        try {
            const res = await axios.post(`${server}/signin`, {
                email,
                password
            });

            axios.defaults.headers.common["Authorization"] = `bearer ${
                res.data.token
            }`;

            showInfo(`Logado com sucesso!`);
        } catch (err) {
            showError(err);
        }

        this.setState({ isLoading: false });
    };

    signup = async (name, email, password) => {
        try {
            await axios.post(`${server}/signup`, {
                name,
                email,
                password
            });

            showInfo("Cadastrado com sucesso!");
            this.setState({ selectedStage: 0 });
        } catch (err) {
            showError(err);
        }

        this.setState({ isLoading: false });
    };

    onClick = async () => {
        this.setState({ isLoading: true });

        const {
            name,
            email,
            password,
            confirmPassword,
            selectedStage
        } = this.state;
        const validEmail = this.validateEmail(email);
        const validPassword = this.validatePassword(password);

        this.setState({
            isEmailValid: validEmail,
            isPasswordValid: validPassword
        });

        if (validEmail && validPassword) {
            if (selectedStage) {
                const validName = this.validateName(name);
                const validConfirmPassowrd = this.isEquals(
                    password,
                    confirmPassword
                );

                this.setState({
                    email: validName,
                    confirmPassword: validConfirmPassowrd
                });

                if (validName && validConfirmPassowrd) {
                    this.signup(name, email, password);
                }
            } else {
                this.login(email, password);
            }
        }

        this.setState({ isLoading: false });
    };

    render() {
        const isLogIn = this.state.selectedStage == false;
        const isSignUp = this.state.selectedStage == true;

        return (
            <View style={styles.container}>
                {!this.state.isHider && (
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.logo}
                            source={require("../../assets/imgs/logo.png")}
                        />
                    </View>
                )}
                {!this.state.isHider && (
                    <View
                        style={[
                            styles.imageContainer,
                            {
                                position: "absolute",
                                marginTop:
                                    SCREEN_HEIGHT - styles.logo.height - 32
                            }
                        ]}
                    >
                        <Image
                            style={styles.image}
                            source={require("../../assets/imgs/background2x.png")}
                        />
                    </View>
                )}
                <View
                    style={{
                        flex: 9,
                        justifyContent: "flex-start",
                        alignItems: "center"
                    }}
                >
                    <KeyboardAvoidingView
                        contentContainerStyle={styles.KeyboardAvoidingContainer}
                        behavior="position"
                    >
                        <View style={styles.buttomContainer}>
                            <TouchableWithoutFeedback
                                onPress={() =>
                                    !this.isLoading
                                        ? this.selectCategory(false)
                                        : ""
                                }
                            >
                                <Text
                                    style={[
                                        styles.textButtom,
                                        isSignUp && styles.notSeleteted
                                    ]}
                                >
                                    Log in
                                </Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback
                                onPress={() =>
                                    !this.isLoading
                                        ? this.selectCategory(true)
                                        : ""
                                }
                            >
                                <Text
                                    style={[
                                        styles.textButtom,
                                        isLogIn && styles.notSeleteted
                                    ]}
                                >
                                    Sign up
                                </Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.rowSelector}>
                            <TabSelector selected={isLogIn} />
                            <TabSelector selected={isSignUp} />
                        </View>
                        <View style={styles.inputContainer}>
                            {isSignUp && (
                                <Input
                                    placeholder="Nome completo..."
                                    leftIcon={
                                        <SimpleIcon
                                            name="user"
                                            color="rgba(0, 0, 0, 0.38)"
                                            size={25}
                                            style={{
                                                backgroundColor: "transparent"
                                            }}
                                        />
                                    }
                                    containerStyle={{
                                        borderBottomColor: "rgba(0, 0, 0, 0.38)"
                                    }}
                                    inputStyle={{ marginLeft: 10 }}
                                    onChangeText={name =>
                                        this.setState({ name })
                                    }
                                    errorMessage={
                                        !this.state.isNameValid
                                            ? "Nome invalido"
                                            : ""
                                    }
                                />
                            )}
                            <Input
                                placeholder="E-mail..."
                                leftIcon={
                                    <Icon
                                        name="envelope-o"
                                        color="rgba(0, 0, 0, 0.38)"
                                        size={25}
                                        style={{
                                            backgroundColor: "transparent"
                                        }}
                                        keyboardType="email-address"
                                    />
                                }
                                containerStyle={{
                                    marginTop: 8,
                                    borderBottomColor: "rgba(0, 0, 0, 0.38)"
                                }}
                                inputStyle={{ marginLeft: 10 }}
                                onChangeText={email => this.setState({ email })}
                                errorMessage={
                                    !this.state.isEmailValid
                                        ? "E-mal invalido"
                                        : ""
                                }
                            />
                            <Input
                                placeholder="Senha..."
                                leftIcon={
                                    <SimpleIcon
                                        name="lock"
                                        color="rgba(0, 0, 0, 0.38)"
                                        size={25}
                                        style={{
                                            backgroundColor: "transparent"
                                        }}
                                    />
                                }
                                containerStyle={{
                                    marginTop: 8,
                                    borderBottomColor: "rgba(0, 0, 0, 0.38)"
                                }}
                                inputStyle={{ marginLeft: 10 }}
                                secureTextEntry={true}
                                onChangeText={password =>
                                    this.setState({ password })
                                }
                                errorMessage={
                                    !this.state.isPasswordValid
                                        ? "Senhar invalida"
                                        : ""
                                }
                            />
                            {isSignUp && (
                                <Input
                                    placeholder="Confirmar senha..."
                                    leftIcon={
                                        <SimpleIcon
                                            name="lock"
                                            color="rgba(0, 0, 0, 0.38)"
                                            size={25}
                                            style={{
                                                backgroundColor: "transparent"
                                            }}
                                        />
                                    }
                                    containerStyle={{
                                        marginTop: 8,
                                        borderBottomColor: "rgba(0, 0, 0, 0.38)"
                                    }}
                                    inputStyle={{ marginLeft: 10 }}
                                    secureTextEntry={true}
                                    onChangeText={confirmPassword =>
                                        this.setState({ confirmPassword })
                                    }
                                    errorMessage={
                                        !this.state.isConfirmPasswordValid
                                            ? "Você digitou senhas diferentes"
                                            : ""
                                    }
                                />
                            )}
                            <View
                                style={{
                                    marginTop: 16,
                                    width: styles.inputContainer.width - 64
                                }}
                            >
                                <Button
                                    loading={this.state.isLoading}
                                    touchableType={
                                        Button.constants.touchableTypes.fade
                                    }
                                    style={styles.buttonStyle}
                                    textStyle={{
                                        fontSize: 16,
                                        color: "#464646"
                                    }}
                                    renderLoadingComponent={
                                        this._renderLoadingComponent
                                    }
                                    onPress={this.onClick}
                                >
                                    {isLogIn ? "ENTRAR" : "CADASTAR"}
                                </Button>
                                {/*
                                <Button
                                    style={{ fontSize: 16, color: "#464646" }}
                                    styleDisabled={{ color: "#292929" }}
                                    containerStyle={{
                                        padding: 10,
                                        height: 45,
                                        overflow: "hidden",
                                        backgroundColor: "#FFF176"
                                    }}
                                    onPress={this.onClick}
                                >
                                    {isLogIn ? "ENTRAR" : "CADASTAR"}
                                </Button>
                                */}
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5C6BC0"
    },
    KeyboardAvoidingContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    buttomContainer: {
        width: SCREEN_WIDTH,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: 16
    },
    textButtom: {
        flex: 1,
        fontSize: 24,
        textAlign: "center",
        color: "#fff"
    },
    buttonStyle: {
        padding: 10,
        height: 40,
        backgroundColor: "#FFF176",
        borderRadius: 3,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#FFF176"
    },
    inputContainer: {
        backgroundColor: "#fff",
        width: SCREEN_WIDTH - 32,
        paddingHorizontal: 16,
        paddingVertical: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    imageContainer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 0.183
    },
    logo: {
        width: SCREEN_WIDTH * 0.55,
        height: SCREEN_HEIGHT * 0.18,
        marginVertical: 16
    },
    rowSelector: {
        height: 20,
        flexDirection: "row"
    },
    selectorContainer: {
        flex: 1,
        alignItems: "center"
    },
    selected: {
        position: "absolute",
        height: 0,
        width: 0,
        top: -10,
        borderWidth: 70,
        borderTopWidth: 15,
        borderColor: "#fff",
        borderEndColor: "transparent",
        borderStartColor: "transparent",
        borderTopColor: "transparent"
    },
    notSeleteted: {
        opacity: 0.5
    }
});
