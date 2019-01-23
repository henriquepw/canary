import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    AsyncStorage
} from "react-native";

import Header from "../components/Header";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import DrawerItem from "../components/DrawerItem";

import axios from "axios";

import {
    server,
    colors,
    validateEmail,
    validateName,
    isEquals,
    validatePassword,
    showError,
    showInfo
} from "../common";

export default class Profile extends Component {
    initialState = {
        name: "",
        email: ""
    };

    state = {
        edit: false,
        id: 0,
        name: "Nome",
        email: "E-mail",
        password: "",
        confirmPassword: ""
    };

    componentWillMount = async () => {
        const json = await AsyncStorage.getItem("userData");
        const { id, name, email } = JSON.parse(json);

        initialState = { name, email };
        this.setState({ id, name, email });
    };

    handleEdit = async () => {
        const edit = !this.state.edit;

        if (this.state.edit) {
            const { id, name, email, password, confirmPassword } = this.state;
            const isEmailEquals = isEquals(this.initialState.name, name);
            const isNameEquals = isEquals(this.initialState.email, email);

            if (!isEmailEquals && !isNameEquals) {
                const json = await AsyncStorage.getItem("userData");
                const userData = JSON.parse(json);
                const user = {};

                if (validateName(name)) {
                    user.name = name;
                    userData.name = name;
                }

                if (validateEmail(email)) {
                    user.email = email;
                    userData.email = email;
                }

                if (
                    validatePassword(password) &&
                    isEquals(password, confirmPassword)
                ) {
                    user.password = password;
                    userData.password = password;
                }

                try {
                    await axios.put(`${server}/users/${id}`, user);

                    AsyncStorage.setItem("userData", JSON.stringify(userData));

                    showInfo("Dados atualizados com sucesso");
                } catch (err) {
                    showError(err);
                }
            }
        }

        this.setState({ edit });
    };

    render() {
        const { edit, name, email } = this.state;

        return (
            <View style={styles.container}>
                <Header
                    iconLeft="arrow-left"
                    iconRight="social-twitter"
                    onPressLeft={() => this.props.navigation.navigate("Home")}
                    onPressRight={() =>
                        this.props.navigation.navigate("CanaryRegister")
                    }
                />

                <View style={styles.category}>
                    <Text style={[styles.text, { flex: 1 }]}> Perfil </Text>

                    <TouchableOpacity onPress={this.handleEdit}>
                        <SimpleLineIcons
                            name={edit ? "check" : "pencil"}
                            color="#000"
                            size={22}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.input}>
                    <SimpleLineIcons name="user" size={20} color="#fff" />

                    <TextInput
                        style={styles.textInput}
                        value={name}
                        editable={edit}
                        onChangeText={name => this.setState({ name })}
                    />
                </View>

                <View style={styles.divider} />

                <View style={styles.input}>
                    <SimpleLineIcons name="envelope" size={20} color="#fff" />

                    <TextInput
                        style={styles.textInput}
                        value={email}
                        editable={edit}
                        onChangeText={email => this.setState({ email })}
                    />
                </View>

                <View style={styles.divider} />

                {edit && (
                    <View>
                        <View style={styles.input}>
                            <SimpleLineIcons
                                name="lock"
                                size={20}
                                color="#fff"
                            />

                            <TextInput
                                style={styles.textInput}
                                placeholder="Nova senha"
                                //placeholderTextColor="#fff"
                                secureTextEntry={true}
                                onChangeText={password =>
                                    this.setState({ password })
                                }
                            />
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.input}>
                            <SimpleLineIcons
                                name="lock"
                                size={20}
                                color="#fff"
                            />

                            <TextInput
                                style={styles.textInput}
                                placeholder="Confirmar senha"
                                //placeholderTextColor="#fff"
                                secureTextEntry={true}
                                onChangeText={confirmPassword =>
                                    this.setState({ confirmPassword })
                                }
                            />
                        </View>

                        <View style={styles.divider} />
                    </View>
                )}

                <View style={styles.category}>
                    <Text style={styles.text}> Canario </Text>
                    <SimpleLineIcons />
                </View>

                <DrawerItem
                    name="Adicionar"
                    iconFamily="SimpleIcon"
                    iconName="plus"
                />

                <DrawerItem
                    containerStyle={{ marginTop: 16 }}
                    name="Remover"
                    iconFamily="SimpleIcon"
                    iconName="close"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryLightColor
    },
    category: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 16,
        paddingHorizontal: 16,
        height: 46
    },
    text: {
        color: colors.secondaryTextColor,
        fontSize: 16,
        fontFamily: "Lato-Bold"
    },
    input: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 24
    },
    textInput: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Lato-Regular",
        marginLeft: 16
    },
    divider: {
        borderColor: "rgba(255, 255, 255, 0.5)",
        height: 0,
        borderWidth: 2,
        marginHorizontal: 16
    }
});
