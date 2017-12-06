import React from 'react';
import { Text, View, Image,ImageBackground, StatusBar, TouchableHighlight,TouchableOpacity, Dimensions, Platform, PixelRatio } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles'
import { Foundation, Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export default class Home extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'الرئيسية',
        //headerStyle: {marginTop: (Platform.OS === 'ios') ? 0 : Expo.Constants.statusBarHeight, backgroundColor: 'transparent',},//,position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0},
        headerStyle:{ marginTop: (Platform.OS === 'ios') ? 0 : Expo.Constants.statusBarHeight, position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 },
        headerTintColor: 'rgba(0,0,0,0)',
        //headerTitleStyle: {fontFamily: 'NeoSansArabic',  fontWeight: 'normal',},
        headerRight: (
          <TouchableOpacity><Foundation name="list" style={{padding: 20, width:50}} size={28} color="#fff"
          onPress={()=>{ navigation.navigate('DrawerOpen') }} /></TouchableOpacity>
        )
      });
    render() {
      return (
            <Image source={require('../../assets/main-bg.png')} style={[styles.slide1]}>
            <Image source={require('../../assets/logo.png')} style={[styles.logo, {width: scale(250)}]} resizeMode="contain"/>
            <View style={{ alignSelf: "flex-end", marginRight: 20, backgroundColor: 'rgba(0,0,0,0)', alignItems: 'flex-end', justifyContent: 'flex-end', padding: 0, margin: 0}}>
            <Text style={{ fontFamily: 'NeoSansArabic', fontSize: scale(22)}}>
              <Text style={{color: "#1e94ff"}}>أبني </Text>
              <Text style={{color: "#ef171b"}}>جسمك </Text>
              <Text style={{color: "#1e94ff"}}>ليكون </Text>
              <Text style={{color: "#ef171b"}}>أقوى </Text>
            </Text>
            <Text style={{color: "#ffffff", alignSelf: "flex-end", fontFamily: 'NeoSansArabic', fontSize: scale(14), marginRight: 20,}}>
            هل أنت مستعد للتجربة
            </Text>
            </View>
            <TouchableHighlight style={styles.btn1} onPress={() => this.props.navigation.navigate('Join')}>
                <Text style={[styles.btnText, {fontSize: scale(14)}]}>انضم الينا الان</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.btn2} onPress={() => this.props.navigation.navigate('About')}>
                <Text style={[styles.btnText, {padding: 19, fontSize: scale(14)}]}>تعرف على مركز بودي تيك</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.btn3} onPress={() => this.props.navigation.navigate('Contact')}>
                <Text style={[styles.btnText, {padding: 20, fontSize: scale(16)}]}>تواصل معنا</Text>
            </TouchableHighlight>
          </Image>
      );
    }
  }