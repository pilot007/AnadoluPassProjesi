import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";
import OneSignal from 'react-native-onesignal';

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/slider.png");

class Home extends Component {
  componentWillMount() {
    OneSignal.init("2ff0c8f9-3d76-494d-9dcf-80efa47672c2");
  
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
}

componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
}

onReceived(notification) {
    console.log("Notification received: ", notification);
}

onOpened(openResult) {
  console.log('Message: ', openResult.notification.payload.body);
  console.log('Data: ', openResult.notification.payload.additionalData);
  console.log('isActive: ', openResult.notification.isAppInFocus);
  console.log('openResult: ', openResult);
}

onIds(device) {
console.log('Device info: ', device);
}
  render() {
    return (
      <Container  style={{ backgroundColor: "#ffffff"}}>
        <StatusBar barStyle="light-content" />
        <ImageBackground style={styles.imageContainer}>
          <View style={styles.headerText}>
            <Text
              style={{
                color:'#44C3D4',
                fontSize: 26,
                textAlign:'center',
              }}
            >Welcome To AnadoluPASS</Text>
          </View>
          <View style={styles.slider}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View style={styles.sliderText}>
            <Text
              style={{
                color:'#A4B2BF',
                fontSize: 15,
                textAlign:'center',
              }}
            >AnadoluPASS kartınız olmadan da karekod ile 
            ödemelerinizi kolayca yapabilirsiniz
            </Text>
          </View>
         <View style={styles.buttonContent}>
             <Button rounded info style={styles.mb15,{alignSelf: 'center',width:200,height:50,alignItems: 'center',justifyContent: 'center',}}
            onPress={() => this.props.navigation.navigate("Anatomy")}
            >
              <Text style={{
                fontSize: 15,
              }}>Lets Go!</Text>
          </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
