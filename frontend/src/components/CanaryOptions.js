import React, { Component } from "react";

import{
    Accordion,
    View,
    Text,
} from "native-base";

import { StyleSheet, }  from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import DrawerItem from "./DrawerItem.js";

const dataArray = [
    { title: "Canarios", content: "Lorem ipsum dolor sit amet" },
  ];


class CanaryOptions extends Component{


    onClickVer(){
        //this.props.navigation.navigate("");    
    }

    onClickAdicionar(){
        //this.props.navigation.navigate("");   
    }

    onClickRemover(){
        //this.props.navigation.navigate("");   
    }

    _renderHeader(item, expanded) {
        return(
            <View style={styles.header}>
                <View style={{flexDirection:"row"}}>
                    <AntDesign name="yuque" size={20} color="white" style={styles.icon}/>
                    <Text style={styles.item}>Canários</Text>
                </View>
                {expanded 
                ? <AntDesign name="upcircleo" size={20} color="white" style={styles.rightIcon}/> 
                : <AntDesign name="downcircleo" size={20} color="white" style={styles.rightIcon}/>}
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
                    onPress={this.onClickVer}
                    iconStyle={{marginHorizontal: 15}}
                    
                />
                <DrawerItem
                    name="Adicionar"
                    iconFamily="AntDesign"
                    iconName="pluscircleo"
                    onPress={this.onClickAdicionar}
                />
                <DrawerItem
                    name="Remover"
                    iconFamily="AntDesign"
                    iconName="closecircleo"
                    onPress={this.onClickRemover}
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

const styles = StyleSheet.create ({
    accordion: {
        borderBottomWidth: 2,
        borderBottomColor: "rgba(255, 255, 255, 0.5)",
        marginHorizontal: 15,
        paddingBottom: 8,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 8,
    },
    item: {
        color: "white",
        marginLeft: 10,
        fontSize: 16
    },
    icon: {
        marginRight: 16,
        marginLeft: 1,
    },
    rightIcon:{

    },
    contentItem: {
        //marginLeft: 20,
    },
}
);