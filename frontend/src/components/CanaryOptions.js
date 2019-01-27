import React, { Component } from "react";

import { Accordion, View, Text } from "native-base";

import { StyleSheet } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import DrawerItem from "./DrawerItem.js";

const dataArray = [
    { title: "Canarios", content: "Lorem ipsum dolor sit amet" }
];

let onClickVer = () => alert("ver");

let onClickAdicionar = () => alert("adicionar");

let onClickRemover = () => alert("remover");

class CanaryOptions extends Component {
    componentWillMount() {
        onClickVer = this.props.ver;
        onClickAdicionar = this.props.adicionar;
        onClickRemover = this.props.remover;
    }

    _renderHeader(item, expanded) {
        return (
            <View style={styles.header}>
                <View style={{ flexDirection: "row" }}>
                    <AntDesign
                        name="yuque"
                        size={20}
                        color="#fff"
                        style={styles.icon}
                    />
                    <Text style={styles.item}>Canários</Text>
                </View>
                <SimpleLineIcons
                    name={expanded ? "arrow-up" : "arrow-down"}
                    size={16}
                    color="#fff"
                    style={styles.rightIcon}
                />
            </View>
        );
    }

    _renderContent(item) {
        return (
            <View style={{}}>
                <DrawerItem
                    name="Ver"
                    iconFamily="MaterialCommunityIcons"
                    iconName="bullseye"
                    iconSize={23}
                    onPress={onClickVer}
                    iconStyle={{ marginHorizontal: 15 }}
                />
                <DrawerItem
                    name="Adicionar"
                    iconFamily="AntDesign"
                    iconName="pluscircleo"
                    onPress={onClickAdicionar}
                />
                <DrawerItem
                    name="Remover"
                    iconFamily="AntDesign"
                    iconName="closecircleo"
                    onPress={onClickRemover}
                />
            </View>
        );
    }

    render() {
        return (
            <View>
                <Accordion
                    dataArray={dataArray}
                    animation={true}
                    expanded={false}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    style={styles.accordion}
                />
            </View>
        );
    }
}

export default CanaryOptions;

const styles = StyleSheet.create({
    accordion: {
        borderBottomWidth: 2,
        borderBottomColor: "rgba(255, 255, 255, 0.5)",
        marginHorizontal: 15,
        paddingBottom: 8
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 8
    },
    item: {
        color: "white",
        marginLeft: 10,
        fontSize: 16
    },
    icon: {
        marginRight: 16,
        marginLeft: 1
    },
    rightIcon: {},
    contentItem: {
        //marginLeft: 20,
    }
});
