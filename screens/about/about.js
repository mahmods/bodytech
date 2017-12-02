import React from 'react';
import { WebView, Text,RefreshControl,ActivityIndicator,ScrollView,KeyboardAvoidingView, ListView, TextInput, View, Image, StatusBar, TouchableHighlight, Dimensions, Platform, PixelRatio } from 'react-native';
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
            <ScrollView>
            <Swiper style={{width: WINDOW_WIDTH, height: WINDOW_HEIGHT * 0.3, marginBottom:20}}>
            {this.state.dataSource.map(function(object, i){
              return (
              <Lightbox key={i} navigator={this.navigation} activeProps={{resizeMode: "contain"}}>
              <Image resizeMode="cover" style={{width: '100%', height: '100%'}} defaultSource={{uri: object.image_url.default_image}} source={{uri: object.image_url.ful_url}}/>
              </Lightbox>);
            })} 
            </Swiper>
            <Text style={[styles.text, {fontSize: scale(20)}]}>من نحن</Text>
            <Text  style={[styles.text, {lineHeight: scale(40)}]}>قاعه بدي تك لبناء الاجسام , فتنس , رشاقه واعاده تأهيل المصابين باستخدام احدث تقنيه المانيه تعتمد على التحفيز الكهربائي للعضلات ...... فقط 20 دقيقه مرتان اسبوعيا </Text>
            <WebView
                style={{width: WINDOW_WIDTH, height: WINDOW_HEIGHT * 0.3}}
                javaScriptEnabled={true}
                source={{uri: 'https://www.youtube.com/embed/hxqr8IT7uDs?rel=0&autoplay=0&showinfo=0'}}
            />
            <Text style={[styles.text, {fontSize: scale(20)}]}>لا وقت للتمارين اليومية ؟ </Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={[styles.text, {color:'#0584f7', fontSize: scale(20)}]}> هو الحل </Text>
              <Text style={[styles.text, {color:'#ee3b30', fontSize: scale(20)}]}>Body Tec</Text>
            </View>
            <Text style={styles.text}>تدريب الجسم</Text>
            <Text style={styles.text}>20 دقيقة تجريب الدورة في الأسبوع</Text>
            <Text style={styles.text}>نتائج اللياقة البدنية آمنة وفعالة</Text>
            <Text style={styles.text}>خطة التغذية الصحية مصممة خصيصا لمتطلباتك</Text>
            <Text style={styles.text}>نتائج اللياقة البدنية آمنة وفعالة</Text>
            <Text style={styles.text}>تدريب كامل مكثف للجسم</Text>
            </ScrollView>
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
    text: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'NeoSansArabic',
        margin: 10,
        fontSize: scale(12)
    }
  })