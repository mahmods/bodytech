import React from 'react';
import { AppLoading, Asset, Font } from 'expo';

import { StyleSheet, Text, View, Image, StatusBar, ImageBackground, TouchableNativeFeedback } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';


function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/main-bg-mdpi.png'),
      require('./assets/logo.png'),
      require('./assets/back2-mdpi.png'),
      require('./assets/back-mdpi.png')
    ]);

    const fontAssets = cacheFonts([{"Arial": require("./arial.ttf")}, {"NeoSansArabic": require("./NeoSansArabic.ttf")}]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
            <Swiper 
              style={styles.wrapper} 
              dotColor="rgb(94,96,100)"
              activeDotColor="rgb(252,252,252)">
        <Image  source={require('./assets/main-bg-mdpi.png')} style={styles.slide1}>
          <Image source={require('./assets/logo.png')} style={styles.logo} resizeMode="contain"/>
          <Text style={{alignSelf: "flex-end", fontFamily: 'NeoSansArabic', fontSize: 20, marginRight: 20,}}>
            <Text style={{color: "#1e94ff"}}>أبني </Text>
            <Text style={{color: "#ef171b"}}>جسمك </Text>
            <Text style={{color: "#1e94ff"}}>ليكون </Text>
            <Text style={{color: "#ef171b"}}>أقوى </Text>
          </Text>
          <Text style={{color: "#ffffff", alignSelf: "flex-end", fontFamily: 'NeoSansArabic', fontSize: 14, marginRight: 20,}}>
          هل أنت مستعد للتجربة
          </Text>
          <TouchableNativeFeedback>
            <View style={styles.btn1}>
              <Text style={styles.btnText}>انضم الينا الان</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View style={styles.btn2}>
              <Text style={[styles.btnText, {padding: 19}]}>تعرف على مركز بودي تيك</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View style={styles.btn3}>
              <Text style={[styles.btnText, {padding: 20, fontSize: 18}]}>تواصل معنا</Text>
            </View>
          </TouchableNativeFeedback>
        </Image>
        <Image source={require('./assets/back2-mdpi.png')} style={styles.slide2}>
          <Image source={require('./assets/logo.png')} style={[styles.logo, {alignSelf: "center", marginRight: 0,}]} resizeMode="contain"/>
          <Text style={[styles.text, {}]}>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </Text>
          <View style={{backgroundColor: '#ea3c3c',  flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableNativeFeedback>
            <View style={[styles.btn4, {backgroundColor: '#ea3c3c'}]}>
              <Text style={styles.btnText}>تواصل معنا</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View style={styles.btn4}>
              <Text style={styles.btnText}>انضم الينا الان</Text>
            </View>
          </TouchableNativeFeedback>
          </View>
        </Image>
        <Image source={require('./assets/back-mdpi.png')} style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </Image>
        <Image source={require('./assets/back2-mdpi.png')} style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </Image>
      </Swiper>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
    
  },
  btnText: {
    fontFamily: 'NeoSansArabic',
    color: 'white',
    textAlign: 'center',
    padding: 8,
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
    justifyContent: 'space-around',
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
    fontFamily: 'NeoSansArabic',
    fontSize: 14,
    textAlign: 'center',
    padding: 20,
    lineHeight: 30
  },
  logo: {
    alignSelf: "flex-end",
    marginRight: 20,
    width: 250,
    height: 43,
  },
  btn1: {
    backgroundColor: '#0584f7',
    width: 160,
    height: 40,
    borderRadius: 100,
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 20,
  },
  btn2: {
    backgroundColor: '#ea3c3c',
    width: 200,
    height: 60,
    borderTopLeftRadius : 100,
    borderBottomLeftRadius : 100,
    alignSelf: "flex-end",
    marginTop: 20,
  },
  btn3: {
    
    backgroundColor: '#373838',
    width: 180,
    height: 70,
    borderTopLeftRadius : 100,
    borderBottomLeftRadius : 100,
    alignSelf: "flex-end",
    marginTop: 20,
  },
  btn4: {
    backgroundColor: '#0584f7',
    width: 160,
    height: 40,
    borderRadius: 100,
  }
})