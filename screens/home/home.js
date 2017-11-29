import React from 'react';
import { Text, View, Image, StatusBar, TouchableHighlight,TouchableOpacity, Dimensions, Platform, PixelRatio } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles'
import { Foundation, Ionicons } from '@expo/vector-icons';

import Svg,{Path} from 'react-native-svg';


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
                style={styles.wrapper} 
                dotColor="rgb(94,96,100)"
                activeDotColor="rgb(252,252,252)"
                loop={false}
                index={4}>
          <Image source={require('../../assets/back-mdpi.png')} style={styles.slide1}>
          <View style={styles.textBack}>
            <Text style={[styles.text, {lineHeight: 0,fontSize: 15, paddingBottom: 0}]}>عنوان السلايدر</Text>
          </View>
          <View style={styles.textBack}>
              <Text style={[styles.text, {lineHeight: 0, textAlign: 'right'}]}>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
              </Text>
            </View>
            <Svg style={{alignItems: 'flex-end'}} width={Dimensions.get('window').width * 0.95} height={45}>
            <Path 
            d="M0.000,0.189 L348.000,0.189 L318.000,41.167 L0.000,41.167 L0.000,0.189 Z"
            fill="#0584f7"/>
            <View style={{marginTop: 10, marginRight: 10}}>
            <View style={styles.pathInnerWrapper}>
              <Text style={styles.pathText}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
              <Ionicons name="ios-checkmark-circle-outline" size={20} color="#fff"/>
            </View>
            </View>
            </Svg>
          </Image>
          <Image source={require('../../assets/back2-mdpi.png')} style={styles.slide1}>
          <View style={styles.textBack}>
            <Text style={[styles.text, {lineHeight: 0,fontSize: 15, paddingBottom: 0}]}>عنوان السلايدر</Text>
          </View>
          <View style={styles.textBack}>
              <Text style={[styles.text, {lineHeight: 0, textAlign: 'right'}]}>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
              </Text>
            </View>
            <Svg style={{alignItems: 'flex-end'}} width={Dimensions.get('window').width * 0.95} height={167}>
            <Path 
            d="M0.333,0.492 L335.333,0.492 L335.333,166.403 L49.000,166.403 L0.333,0.492 Z"
            fill="#0584f7"/>
            <View style={{marginTop: 10, marginRight: 10}}>
            <View style={styles.pathInnerWrapper}>
              <Text style={styles.pathText}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
              <Ionicons name="ios-checkmark-circle-outline" size={20} color="#fff"/>
            </View>
            <View style={styles.pathInnerWrapper}>
              <Text style={styles.pathText}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
              <Ionicons name="ios-checkmark-circle-outline" size={20} color="#fff"/>
            </View>
            <View style={styles.pathInnerWrapper}>
              <Text style={styles.pathText}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
              <Ionicons name="ios-checkmark-circle-outline" size={20} color="#fff"/>
            </View>
            <View style={styles.pathInnerWrapper}>
              <Text style={styles.pathText}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
              <Ionicons name="ios-checkmark-circle-outline" size={20} color="#fff"/>
            </View>
            <View style={styles.pathInnerWrapper}>
              <Text style={styles.pathText}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
              <Ionicons name="ios-checkmark-circle-outline" size={20} color="#fff"/>
            </View>
            <View style={styles.pathInnerWrapper}>
              <Text style={styles.pathText}>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</Text>
              <Ionicons name="ios-checkmark-circle-outline" size={20} color="#fff"/>
            </View>
            </View>
             </Svg>
             <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
  
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
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
  
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Contact')} style={[styles.btn4, {backgroundColor: '#ea3c3c'}]}>
                <Text style={styles.btnText}>تواصل معنا</Text>
            </TouchableHighlight>
  
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Join')} style={styles.btn4}>
                <Text style={styles.btnText}>انضم الينا الان</Text>
            </TouchableHighlight>
            </View>
          </Image>
          <Image  source={require('../../assets/main-bg-mdpi.png')} style={styles.slide1}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain"/>
            <Text style={{alignSelf: "flex-end", fontFamily: 'NeoSansArabic', fontSize: 20, marginRight: 20,}}>
              <Text style={{color: "#1e94ff"}}>أبني </Text>
              <Text style={{color: "#ef171b"}}>جسمك </Text>
              <Text style={{color: "#1e94ff"}}>ليكون </Text>
              <Text style={{color: "#ef171b"}}>أقوى </Text>
            </Text>
            <Text style={{color: "#ffffff", alignSelf: "flex-end", fontFamily: 'NeoSansArabic', fontSize: 14, marginRight: 20,}}>
            هل أنت مستعد للتجربة
            </Text>
            <TouchableHighlight style={styles.btn1} onPress={() => this.props.navigation.navigate('Join')}>
                <Text style={styles.btnText}>انضم الينا الان</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.btn2} onPress={() => this.props.navigation.navigate('Gallery')}>
                <Text style={[styles.btnText, {padding: 19}]}>تعرف على مركز بودي تيك</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.btn3} onPress={() => this.props.navigation.navigate('Contact')}>
                <Text style={[styles.btnText, {padding: 20, fontSize: 18}]}>تواصل معنا</Text>
            </TouchableHighlight>
          </Image>
        </Swiper>
      );
    }
  }