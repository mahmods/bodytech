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
          <TouchableOpacity><Foundation name="list" style={{padding: 20}} size={28} color="#fff"
          onPress={()=>{ navigation.navigate('DrawerOpen') }} /></TouchableOpacity>
        )
      });
    render() {
      return (
        <Swiper 
          style={styles.wrapper} loop={false} index={4}
          dotColor="rgb(94,96,100)" activeDotColor="rgb(252,252,252)">

          <Image source={require('../../assets/back-mdpi.png')} style={styles.slide1}>
            <View style={styles.textBack}>
              <Text style={[styles.text, {alignSelf:'flex-end', textAlign: 'right', fontSize: scale(22), paddingBottom: 0}]}>عنوان السلايدر</Text>
              <Text style={[styles.text, {textAlign: 'right', paddingTop: 0}]}>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
              </Text>
            </View>

            <ImageBackground style={{marginBottom: 10, alignSelf: 'flex-start',flexDirection: 'row', width: Dimensions.get('window').width * 0.95, padding: 15}} source={require('../../assets/content1.png')}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={[styles.pathText]}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
                <Ionicons name="ios-checkmark-circle-outline" size={scale(20)} color="#fff"/>
              </View>
            </ImageBackground>

            <ImageBackground style={{marginBottom: 10, alignSelf: 'flex-end',flexDirection: 'row', width: Dimensions.get('window').width * 0.95, padding: 15}} source={require('../../assets/content2.png')}>
              <View style={{flex: 1, flexDirection: 'row', justifyContent:'flex-end'}}>
                <Text style={[styles.pathText, {textAlign: 'right'}]}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
                <Ionicons name="ios-checkmark-circle-outline" size={scale(20)} color="#fff"/>
              </View>
            </ImageBackground>

            <ImageBackground style={{marginBottom: 10, alignSelf: 'flex-start',flexDirection: 'row', width: Dimensions.get('window').width * 0.95, padding: 15}} source={require('../../assets/content1.png')}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text style={[styles.pathText, {textAlign: 'left'}]}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
                <Ionicons name="ios-checkmark-circle-outline" size={scale(20)} color="#fff"/>
              </View>
            </ImageBackground>

            <ImageBackground style={{marginBottom: 10, alignSelf: 'flex-end',flexDirection: 'row', width: Dimensions.get('window').width * 0.95, padding: 15}} source={require('../../assets/content2.png')}>
              <View style={{flex: 1, flexDirection: 'row', justifyContent:'flex-end'}}>
                <Text style={[styles.pathText, {textAlign: 'right'}]}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
                <Ionicons name="ios-checkmark-circle-outline" size={scale(20)} color="#fff"/>
              </View>
            </ImageBackground>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Join')} style={styles.btn4}>
                  <Text style={styles.btnText}>انضم الينا الان</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Contact')} style={[styles.btn4, {backgroundColor: '#ea3c3c'}]}>
                  <Text style={styles.btnText}>تواصل معنا</Text>
              </TouchableHighlight>
            </View>
          </Image>

          <Image source={require('../../assets/back2-mdpi.png')} style={styles.slide4}>
            <View style={[styles.textBack, {paddingRight: 5, paddingLeft: 5}]}>
              <Text style={[styles.text, {alignSelf:'flex-end', textAlign: 'right', fontSize: scale(22), paddingBottom: 0}]}>عنوان السلايدر</Text>
              <Text style={[styles.text, {textAlign: 'right', paddingTop: 0}]}>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
              </Text>
            </View>
            <ImageBackground source={require('../../assets/contentBg.png')} style={{alignItems: 'flex-end', alignSelf:'flex-end', marginTop: 30, width: Dimensions.get('window').width * 0.95}}>
              <View style={{marginTop: 10, marginRight: 10}}>
                <View style={styles.pathInnerWrapper}>
                  <Text style={styles.pathText}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
                  <Ionicons name="ios-checkmark-circle-outline" size={scale(20)} color="#fff"/>
                </View>
                <View style={styles.pathInnerWrapper}>
                  <Text style={styles.pathText}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
                  <Ionicons name="ios-checkmark-circle-outline" size={scale(20)} color="#fff"/>
                </View>
                <View style={styles.pathInnerWrapper}>
                  <Text style={styles.pathText}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
                  <Ionicons name="ios-checkmark-circle-outline" size={scale(20)} color="#fff"/>
                </View>
                <View style={styles.pathInnerWrapper}>
                  <Text style={styles.pathText}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس</Text>
                  <Ionicons name="ios-checkmark-circle-outline" size={scale(20)} color="#fff"/>
                </View>
                <View style={styles.pathInnerWrapper}>
                  <Text style={styles.pathText}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس</Text>
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

          <Image source={require('../../assets/back2-mdpi.png')} style={styles.slide2}>
            <Image source={require('../../assets/logo.png')} style={[styles.logo, {alignSelf: "center", marginRight: 0}]} resizeMode="contain"/>
            <View style={styles.textBack}>
              <Text style={styles.text}>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
              </Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: Dimensions.get('window').height * 0.25}}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Join')} style={styles.btn4}>
                <Text style={styles.btnText}>انضم الينا الان</Text>
            </TouchableHighlight>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Contact')} style={[styles.btn4, {backgroundColor: '#ea3c3c'}]}>
                <Text style={styles.btnText}>تواصل معنا</Text>
            </TouchableHighlight>
            </View>

          </Image>

          <Image source={require('../../assets/main-bg.png')} style={[styles.slide1]}>
            <Image source={require('../../assets/logo.png')} style={[styles.logo, {width: scale(250)}]} resizeMode="contain"/>
            <Text style={{alignSelf: "flex-end", fontFamily: 'NeoSansArabic', fontSize: scale(22), marginRight: 20,}}>
              <Text style={{color: "#1e94ff"}}>أبني </Text>
              <Text style={{color: "#ef171b"}}>جسمك </Text>
              <Text style={{color: "#1e94ff"}}>ليكون </Text>
              <Text style={{color: "#ef171b"}}>أقوى </Text>
            </Text>
            <Text style={{color: "#ffffff", alignSelf: "flex-end", fontFamily: 'NeoSansArabic', fontSize: scale(14), marginRight: 20,}}>
            هل أنت مستعد للتجربة
            </Text>
            <TouchableHighlight style={styles.btn1} onPress={() => this.props.navigation.navigate('Join')}>
                <Text style={[styles.btnText, {fontSize: scale(14)}]}>انضم الينا الان</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.btn2} onPress={() => this.props.navigation.navigate('Gallery')}>
                <Text style={[styles.btnText, {padding: 19, fontSize: scale(14)}]}>تعرف على مركز بودي تيك</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.btn3} onPress={() => this.props.navigation.navigate('Contact')}>
                <Text style={[styles.btnText, {padding: 20, fontSize: scale(16)}]}>تواصل معنا</Text>
            </TouchableHighlight>
          </Image>
        </Swiper>
      );
    }
  }