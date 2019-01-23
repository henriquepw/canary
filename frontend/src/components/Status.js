import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Status extends Component {
    temperature() {
        returning = "";
        if (this.props.temperature != null) {
            returning = this.props.temperature + "°C";
        }
        return returning;
    }

    humidity() {
        returning = "";
        if (this.props.humidity != null) {
            returning = this.props.humidity;
        }
        return returning;
    }

    co() {
        returning = "";
        if (this.props.co != null) {
            returning = this.props.co;
        }
        return returning;
    }

    co2() {
        returning = "";
        if (this.props.co2 != null) {
            returning = this.props.co2;
        }
        return returning;
    }

    nh3() {
        returning = "";
        if (this.props.nh3 != null) {
            returning = this.props.nh3;
        }
        return returning;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.lesserContainer, styles.topContainer]}>
                    <View style={styles.unity}>
                        <Text style={styles.text}>Temperatura</Text>
                        <Text style={styles.text}>{this.temperature()}</Text>
                    </View>
                    <View style={styles.unity}>
                        <Text style={styles.text}>Umidade</Text>
                        <Text style={styles.text}>{this.humidity()}</Text>
                    </View>
                </View>
                <View style={[styles.lesserContainer, styles.bottomContainer]}>
                    <View style={styles.unity}>
                        <Text style={styles.text}>CO</Text>
                        <Text style={styles.text}>{this.co()}</Text>
                    </View>
                    <View style={styles.unity}>
                        <Text style={styles.text}>CO2</Text>
                        <Text style={styles.text}>{this.co2()}</Text>
                    </View>
                    <View style={styles.unity}>
                        <Text style={styles.text}>NH3</Text>
                        <Text style={styles.text}>{this.nh3()}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Status;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16
    },
    lesserContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    topContainer: {
        marginHorizontal: 60
    },
    bottomContainer: {
        marginHorizontal: -20
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    unity: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
