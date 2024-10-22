import React, { Component } from "react";
import { View } from "react-native";

import MapView from "react-native-maps";

export default class Map extends Component {
  state = {
    region: null
  };

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
          }
        });
      },
      () => {
        alert("Não foi possivel carregar o mapa, tente novamente.");
      },
      {
        timeout: 4000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }
    );
  }

  render() {
    const { region } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Header
          iconLeft="menu"
          iconRight="yuque"
          iconRightFamily="AntDesign"
          onPressLeft={this.props.navigation.openDrawer}
          onPressRight={() => this.props.navigation.navigate("SeeCanaries")}
        />
        <MapView
          style={{ flex: 1 }}
          region={region}
          showsUserLocation
          loadingEnabled
        />
      </View>
    );
  }
}
