import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class DrawerItem extends Component {
    iconProps = {
        name: this.props.iconName,
        color: this.iconColor(),
        size: this.iconSize(),
        style: this.iconStyle()
    };

    icon() {
        let returning = "";
        switch (this.props.iconFamily) {
            case "SimpleIcon":
                returning = <SimpleIcon {...this.iconProps} />;
            case "AntDesign":
                returning = <AntDesign {...this.iconProps} />;
            case "MaterialCommunityIcons":
                returning = <MaterialCommunityIcons {...this.iconProps} />;
            case "Octicons":
                returning = <Octicons {...this.iconProps} />;
            case "FontAwesome":
                returning = <FontAwesome {...this.iconProps} />;
        }
        return returning;
    }

    iconSize() {
        return this.props.iconSize ? this.props.iconSize : 20;
    }

    iconColor() {
        return this.props.iconColor ? this.props.iconColor : "#fff";
    }

    iconStyle() {
        return this.props.iconStyle ? this.props.iconStyle : styles.icon;
    }

    containerStyle() {
        let style = this.props.containerStyle
            ? [styles.itemContainer, this.props.containerStyle]
            : styles.itemContainer;
        return style;
    }

    textStyle() {
        return this.props.textStyle ? this.props.textStyle : styles.item;
    }

    render() {
        return (
            <TouchableOpacity
                style={this.containerStyle()}
                onPress={this.props.onPress}
            >
                {this.icon()}
                <Text style={this.textStyle()}>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}

export default DrawerItem;

const styles = StyleSheet.create({
    item: {
        color: "white",
        marginLeft: 10,
        fontSize: 16
    },
    icon: {
        marginHorizontal: 16
    },
    itemContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 8,
        paddingVertical: 1
    }
});
