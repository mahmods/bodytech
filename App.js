import React from 'react';
import Expo from "expo";
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Arial: require("./arial.ttf")
    });
    this.setState({ isReady: true });    
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Swiper 
      style={styles.wrapper} 
      autoplay={true} 
      autoplayTimeout={5} 
      dotColor="rgb(94,96,100)"
      activeDotColor="rgb(252,252,252)">
        <Image source={require('./assets/main-bg-xxxhdpi.png')} style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </Image>
        <Image source={require('./assets/back2-xxxhdpi.png')} style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </Image>
        <Image source={require('./assets/back-xxxhdpi.png')} style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </Image>
        <Image source={require('./assets/back2-xxxhdpi.png')} style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </Image>
      </Swiper>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    marginTop: StatusBar.currentHeight
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
  }
})