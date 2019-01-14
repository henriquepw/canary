import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";

class DrawerItem extends Component {
    onPress() {}

    iconProps = {
        name: this.props.iconName,
        color: this.iconColor(),
        size: 20,
        style: this.iconStyle()
    };

    icon() {
        let returning = "";
        switch (this.props.iconFamily) {
            case "SimpleIcon":
                returning = <SimpleIcon {...this.iconProps} />;
                break;
            case "AntDesign":
                returning = <AntDesign {...this.iconProps} />;
                break;
            case "MaterialCommunityIcons":
                returning = <MaterialCommunityIcons {...this.iconProps} />;
                break;
            case "Octicons":
                returning = <Octicons {...this.iconProps} />;
                break;
        }
        return returning;
    }

    iconColor() {
        return this.props.iconColor ? this.props.iconColor : "white";
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
        return (this.props.textStyle ? this.props.textStyle : styles.item);
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
        marginLeft: 30
    },
    itemContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 8,
        paddingVertical: 1
    }
});
