import React from 'react';
import { WebView,ImageBackground, Text,RefreshControl,ActivityIndicator,ScrollView,KeyboardAvoidingView, ListView, TextInput, View, Image, StatusBar, TouchableHighlight, Dimensions, Platform, PixelRatio } from 'react-native';
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Lightbox from 'react-native-lightbox';

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
          dataSource: null
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
        return fetch('http://bodytec-iraq.com/api/get-sliders')
        .then((response) => response.json())
        .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
              isLoading: false,
              dataSource: responseJson.sliders,
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
                <View style={styles.backGround}>
                <ActivityIndicator />
              </View>
            );
          }
        return (
            <View style={styles.backGround}>
            
          <Image source={require('../../assets/back2-mdpi.png')} style={styles.slide4}>
            <View style={[styles.textBack, {paddingRight: 5, paddingLeft: 5}]}>
              <Text style={[styles.text, {alignSelf:'flex-end', textAlign: 'right', fontSize: scale(22), paddingBottom: 0}]}>عنوان السلايدر</Text>
              <Text style={[styles.text, {textAlign: 'right', paddingTop: 0}]}>
              قاعه بدي تك لبناء الاجسام , فتنس , رشاقه واعاده تأهيل المصابين باستخدام احدث تقنيه المانيه تعتمد على التحفيز الكهربائي للعضلات ...... فقط 20 دقيقه مرتان اسبوعيا 
              </Text>
            </View>
            <ImageBackground source={require('../../assets/contentBg.png')} style={{alignItems: 'flex-end', alignSelf:'flex-end', marginTop: 30, width: Dimensions.get('window').width * 0.8}}>
              <View style={{marginTop: 10, marginRight: 10}}>
                <View style={styles.pathInnerWrapper}>
                  <Text style={styles.pathText}>تدريب الجسم</Text>
                  <Ionicons name="ios-checkmark-circle-outline" size={scale(20)} color="#fff"/>
                </View>
                <View style={styles.pathInnerWrapper}>
                  <Text style={styles.pathText}>20 دقيقة تجريب الدورة في الأسبوع</Text>
                  <Ionicons name="ios-checkmark-circle-outline" size={scale(20)} color="#fff"/>
                </View>
                <View style={styles.pathInnerWrapper}>
                  <Text style={styles.pathText}>نتائج اللياقة البدنية آمنة وفعالة</Text>
                  <Ionicons name="ios-checkmark-circle-outline" size={scale(20)} color="#fff"/>
                </View>
                <View style={styles.pathInnerWrapper}>
                  <Text style={styles.pathText}>خطة التغذية الصحية مصممة خصيصا لمتطلباتك</Text>
                  <Ionicons name="ios-checkmark-circle-outline" size={scale(20)} color="#fff"/>
                </View>
                <View style={styles.pathInnerWrapper}>
                  <Text style={styles.pathText}>نتائج اللياقة البدنية آمنة وفعالة</Text>
                  <Ionicons name="ios-checkmark-circle-outline" size={scale(20)} color="#fff"/>
                </View>
                <View style={styles.pathInnerWrapper}>
                  <Text style={styles.pathText}>تدريب كامل مكثف للجسم</Text>
                  <Ionicons name="ios-checkmark-circle-outline" size={scale(20)} color="#fff"/>
                </View>
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
        backgroundColor: '#212121',
        marginTop: Expo.Constants.statusBarHeight,
        paddingTop: Header.HEIGHT,
      },
    image: {
      flex: 1,
      height: WINDOW_WIDTH * 0.41,
    },
    pathText: {
      color: '#fff',
      fontSize: scale(10),
      fontFamily: 'NeoSansArabic',
      marginRight: 5
    },
    pathInnerWrapper: {
      justifyContent: 'flex-end',
      flexDirection:'row',
      marginBottom: 10,
    },
    text: {
      color: '#fff',
      fontFamily: 'NeoSansArabic',
      textAlign: 'center',
      padding: 15,
      fontSize: scale(12),
      lineHeight: scale(30)
    },
    textBack: {
      backgroundColor: 'rgba(0,0,0,0)'
    },
    slide4: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 50,
      width: null,
      height: null,
    },
    btnText: {
      fontFamily: 'NeoSansArabic',
      color: 'white',
      textAlign: 'center',
      padding: 8,
      fontSize: scale(10)
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