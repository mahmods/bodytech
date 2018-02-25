import React from 'react';
import { WebView,ImageBackground, Text,RefreshControl,ActivityIndicator,ScrollView,KeyboardAvoidingView, ListView, TextInput, View, Image, StatusBar, TouchableHighlight, Dimensions, Platform, PixelRatio } from 'react-native';
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Lightbox from 'react-native-lightbox';
import HTMLView from 'react-native-htmlview';


import { Header } from 'react-navigation';

import { Ionicons, Foundation } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const BASE_PADDING = 10;
export default class about extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          refreshing: false,
          dataSource: null,
          features: null,
          message: null
        }
      }
    static navigationOptions = ({ navigation }) => ({
        title: 'من نحن',
        headerTitle: 'من نحن',
        headerStyle:{ marginTop: (Platform.OS === 'ios') ? 0 : Expo.Constants.statusBarHeight, position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 },
        headerTintColor: '#fff',
        headerTitleStyle: {fontFamily: 'NeoSansArabic',  fontWeight: 'normal',  alignSelf:'center'},
        headerLeft: (
          <Ionicons name="md-arrow-round-back" style={{padding: 20}} size={28} color="#fff"
          onPress={()=>{ navigation.goBack(null) }} />
        ),
        headerRight: (
        <Foundation name="list" style={{padding: 20}} size={28} color="#fff"
        onPress={()=>{ navigation.navigate('DrawerOpen') }} />
        )
      });

    componentDidMount() {
        return fetch('http://bodytec-iraq.com/api/get-about')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
              isLoading: false,
              message: responseJson.message,
              features: responseJson.features
            }, function() {
              // do something with new state
            });
          })
          .catch((error) => {

          });
      }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={[styles.backGround, {justifyContent: 'center', alignItems: 'center'}]}>
                <ActivityIndicator />
              </View>
            );
          }
        return (
            <View style={styles.backGround}>
          <Image source={require('../../../assets/back2-mdpi.png')} style={styles.slide4}>
            <View style={[styles.textBack, {paddingRight: scale(20), paddingLeft: scale(20)}]}>
              <Text style={[styles.text, { textAlign: 'right', fontSize: scale(20), paddingBottom: 0}]}>من نحن</Text>
              <HTMLView stylesheet={styles} value={this.state.message} />
            </View>
            <ImageBackground resizeMode='stretch' source={require('../../../assets/contentBg.png')} style={{alignItems: 'flex-end', alignSelf:'flex-end', marginBottom: 20, marginTop: 20, width: width*0.95}}>
              <View style={{marginTop: scale(15), marginBottom: scale(15), marginRight: scale(15)}}>
              {this.state.features.map(function(object, i){
                return (
                  <View key={i} style={[styles.pathInnerWrapper, styles.textBack]}>
                  <Text style={styles.pathText}>{object.feature_name}</Text>
                  <Ionicons name="ios-checkmark-circle-outline" size={scale(16)} color="#fff"/>
                </View>);
              })} 
              </View>
             </ImageBackground>

             <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 40}}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Join')} style={styles.btn4}>
                  <Text style={styles.btnText}>انضم الينا الان</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Contact')} style={[styles.btn4, {backgroundColor: '#ea3c3c'}]}>
                  <Text style={styles.btnText}>تواصل معنا</Text>
              </TouchableHighlight>
              </View>

          </Image>
            </View>
        )
    }
}

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backGround: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121',
        marginTop: Expo.Constants.statusBarHeight,
        paddingTop: Header.HEIGHT,
      },
    image: {
      flex: 1,
      //height: WINDOW_WIDTH * 0.41,
    },
    pathText: {
      color: '#fff',
      fontSize: scale(12),
      fontFamily: 'NeoSansArabic',
      marginRight: 15
    },
    pathInnerWrapper: {
      justifyContent: 'flex-end',
      flexDirection:'row',
      paddingBottom: 15,
    },
    btnText: {
      fontFamily: 'NeoSansArabic',
      color: 'white',
      textAlign: 'center',
      padding: 8,
      fontSize: scale(14)
    },
    textBack: {
      backgroundColor: 'rgba(0,0,0,0)'
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
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 50,
      width: null,
      height: null,
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    slide4: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: 50,
      width: null,
      height: null,
    },
    p: {
      color: '#fff',
      fontFamily: 'NeoSansArabic',
      textAlign: 'right',
      //padding: 15,
      fontSize: scale(12),
      lineHeight: scale(30)
    },
    text: {
      color: '#fff',
      fontFamily: 'NeoSansArabic',
      textAlign: 'center',
      //padding: 15,
      fontSize: scale(14),
      lineHeight: scale(30)
    },
    logo: {
      alignSelf: "flex-end",
      marginRight: 20,
      width: 250,
    },
    btn1: {
      backgroundColor: '#0584f7',
      paddingRight:40,
      paddingLeft:40,
      paddingTop: 5,
      paddingBottom: 5,
      borderRadius:100,
      alignSelf: "flex-end",
      marginRight: 10,
      marginTop: 20,
    },
    btn2: {
      backgroundColor: '#ea3c3c',
      overflow: 'hidden',
      borderTopLeftRadius : 100,
      borderBottomLeftRadius : 100,
      alignSelf: "flex-end",
      marginTop: 20,
    },
    btn3: {
      
      backgroundColor: '#373838',
      overflow: 'hidden',
      borderTopLeftRadius : 100,
      borderBottomLeftRadius : 100,
      alignSelf: "flex-end",
      marginTop: 20,
      paddingRight:20,
      paddingLeft:20,
    },
    btn4: {
      backgroundColor: '#0584f7',
      borderRadius: 100,
      overflow: 'hidden',
      paddingRight:scale(35),
      paddingLeft:scale(35),
      margin: 10,
    }
  })