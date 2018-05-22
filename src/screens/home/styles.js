const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth=Dimensions.get("window").width;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  headerText: {
    width:300,
    marginTop: 80,
    left: Platform.OS === "android" ? 40 : 50,
  },
  slider:{
    width:deviceWidth,
    marginTop: 30,
  },
  sliderText:{
    width:300,
    height:50,
    marginTop: 5,
    left: Platform.OS === "android" ? 40 : 50,
  },
  buttonContent:{
    width:300,
    height:70,
    marginTop: 40,
    left: Platform.OS === "android" ? 40 : 50,
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  logo: {
    width: deviceWidth,
    height: deviceWidth/2,
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  }
};
