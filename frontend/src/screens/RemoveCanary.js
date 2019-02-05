import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import Picker from "react-native-picker-select"
import Button from "react-native-smart-button";

import { colors } from "../common.js";
import Header from "../components/Header"

import { getCanariesByUser, deleteCanary } from "../services/canaries.service";

class RemoveCanary extends Component{
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            mounted: true,
            address:{
                street: "Rua",
                neighborhood: "Bairro",
                num: "Numero",
                city: "Cidade",
                uf: "UF",
            },
            canaryId: "",
            canaryIndex: "",
            text: "Carregando",
            loadingStyle: styles.loading,
            data: [{ label: "carregando", value: {} }],
            keyValue: true,
        };
        this.pickerProps = {
            onValueChange: this.onValueChange,
            items: this.state.data,
            placeholder: {},
            style: styles.picker,       
        };
    }

    setData = (data) => {
        let canaries = data.map((canary) => {
            return {
                label: "" + canary.name,
                value: {
                    id: canary.id,
                    address:{
                        street: "Rua" + canary.id,
                        neighborhood: "Bairro" + canary.id,
                        num: "Numero" + canary.id,
                        city: "Cidade" + canary.id,
                        uf: "UF" + canary.id,
                    }
                },
            }
        });
        
        this.state.data = canaries;
        this.pickerProps.items = canaries;
        this.setState({keyValue: !this.state.keyValue});
    }

    noCanaries = () => {
        this.setState({text: "Nenhum Canário a Exibir", loadingStyle: styles.loading,});
        this.setState({loaded: false});
        this.pickerProps.items = [{label: "Nenhum Canário a Exibir", value:{id: 0, address:{
            street: "",
            neighborhood: "",
            num: "",
            city: "",
            uf: "",
        }}}]  
    }

    onLoadingSuccess = () => {
        if (this.state.mounted && this.state.data.length) {
            this.setState({ loaded: true });
            this.setState({ address: this.state.data[0].value.address });
            this.setState({ canaryId: this.state.data[0].value.id});
        }
    }

    onLoadingFail = () => {
        if (this.state.mounted) {
            this.setState({
                text: "Falha ao Carregar",
                loadingStyle: styles.failLoading
            });
        }
    }

    onValueChange = (value, index) => {
        this.setState({ address: value.address });
        this.setState({ canaryId: value.id });
    };

    getCanaries = () => {
        return getCanariesByUser()
        .then(res => res.data)
        .then(data => {this.setData(data)})
        .then(() => {this.onLoadingSuccess()})
        .catch(() => {this.onLoadingFail()});
    }

    componentWillMount() {
        this.getCanaries();
    }

    componentWillUnmount(){
        this.setState({ mounted: false });
        this.setState({ loaded: false });
    }

    reloadPicker = () => {
        this.getCanaries()
        .then(() => this.setState({keyValue: !this.state.keyValue}));  
    }

    onClickDelete = () => {
        if(this.state.canaryId){
            deleteCanary(this.state.canaryId)
            .then(()=> this.reloadPicker())
            .catch(()=>alert("Falha ao Deletar"));   
        } else{
            this.reloadPicker();
        }
    }

    render(){return(
        <View style={styles.container}>

            <Header
                    iconLeft="menu"
                    iconRight="yuque"
                    iconRightFamily="AntDesign"
                    onPressLeft={this.props.navigation.openDrawer}
                    onPressRight={() =>
                        this.props.navigation.navigate("SeeCanaries")
                    }
            />
            <View style={styles.picker} key={this.state.keyValue}>
                {this.state.loaded ? (
                        <Picker
                            {...this.pickerProps}
                            key={this.state.keyValue}
                            style={{ underline: { borderTopWidth: 0 } }}
                        />
                    ) : (
                        <Text style={this.state.loadingStyle}>
                            {this.state.text}
                        </Text>
                    )}
            </View>

            <View style={styles.category}>
                    <Text style={[styles.title, { flex: 1 }]}>Endereço</Text>
            </View>

            <View style={{}}>
                <View style={styles.street}>
                    <View style={[styles.infoContainer, {flex: 7}]}>
                        <Text style={styles.text}>Cidade</Text>
                        <Text style={styles.info}>{this.state.address.city}</Text>
                    </View>
                    <View style={[styles.infoContainer, {flex: 3}]}>
                        <Text style={styles.text}>UF</Text>
                        <Text style={styles.info}>{this.state.address.uf}</Text>
                    </View>  
                </View>

                <View style={styles.street}>
                    <View style={[styles.infoContainer, {flex: 7}]}>
                        <Text style={styles.text}>Rua</Text>
                        <Text style={styles.info}>{this.state.address.street}</Text>
                    </View>
                    <View style={[styles.infoContainer, {flex: 3}]}>
                        <Text style={styles.text}>Nº</Text>
                        <Text style={styles.info}>{this.state.address.num}</Text>
                    </View>  
                </View>

                <View style={styles.street}>
                    <View style={[styles.infoContainer, {flex: 7}]}>
                        <Text style={styles.text}>Bairro</Text>
                        <Text style={styles.info}>{this.state.address.neighborhood}</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                        <Button style={styles.button}
                            onPress={this.onClickDelete}>
                            <Text style={styles.buttonText}>Deletar Canário</Text>
                        </Button>
                    </View>
            </View>
                   
        </View>
    )
    }
}

export default RemoveCanary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryLightColor,
    },
    infoContainer:{
        marginHorizontal: 16,
    },
    picker: {
        backgroundColor: "white",
        marginHorizontal: 16,
        marginTop: 12
    },
    category: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 16,
        paddingHorizontal: 16,
        height: 46
    },
    textBar:{
        color: colors.secondaryTextColor,
        fontSize: 16,
        fontFamily: "Lato-Bold"
    },
    title:{
        color: colors.secondaryTextColor,
        fontSize: 16,
        fontFamily: "Lato-Bold"
    },
    text: {
        color: colors.secondaryTextColor,
        fontSize: 13,
        fontFamily: "Lato-Bold"
    },
    textInput: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
        fontFamily: "Lato-Regular"
    },
    street: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
    },
    info: {
        borderBottomWidth: 2,
        borderBottomColor: "rgba(255, 255, 255, 0.5)",
        color: colors.primaryTextColor,
        fontSize: 16,
        fontFamily: "Lato-Bold",
        height: 30,
        marginTop: 2,
    },
    button: {
        backgroundColor: colors.primaryColor,
        width: 140,
        height: 36,
        justifyContent: "center",
        marginTop: 40,
    },
    buttonText: {
        color: "#fff",
        fontWeight: 'bold',
        fontFamily: "Lato-Regular",
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    loading: {
        paddingVertical: 16,
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Lato-Regular"
    },
    failLoading: {
        paddingVertical: 16,
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Lato-Regular",
        color: "red"
    },
    
});

const text1 = {
    temperature: "temperature text 1",
    humidity: "humidity text 1",
    co: "co text 1",
    co2: "co2 text 1",
    nh3: "nh3 text 1"
};

const text2 = {
    temperature: "temperature text 2",
    humidity: "humidity text 2",
    co: "co text 2",
    co2: "co2 text 2",
    nh3: "nh3 text 2"
};

const text3 = {
    temperature: "temperature text 3",
    humidity: "humidity text 3",
    co: "co text 3",
    co2: "co2 text 3",
    nh3: "nh3 text 3"
};

const status1 = {
    temperature: 1,
    humidity: 1,
    co: 1,
    co2: 1,
    nh3: 1
};

const status2 = {
    temperature: 2,
    humidity: 2,
    co: 2,
    co2: 2,
    nh3: 2
};

const status3 = {
    temperature: 3,
    humidity: 3,
    co: 3,
    co2: 3,
    nh3: 3
};