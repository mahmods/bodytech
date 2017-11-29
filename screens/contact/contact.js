import React from 'react';
import { Text,ScrollView,KeyboardAvoidingView, TextInput, View, Image, StatusBar, TouchableHighlight, Dimensions, Platform, PixelRatio } from 'react-native';
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Ionicons, Foundation } from '@expo/vector-icons';

import { Header } from 'react-navigation';
export default class contact extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'تواصل معنا',
        headerStyle:{ marginTop: (Platform.OS === 'ios') ? 0 : Expo.Constants.statusBarHeight, position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 },
        headerTintColor: '#fff',
        headerTitleStyle: {fontFamily: 'NeoSansArabic',  fontWeight: 'normal', alignSelf:'center'},
        headerLeft: (
          <Ionicons name="md-arrow-round-back" style={{padding: 20}} size={28} color="#fff"
          onPress={()=>{ navigation.goBack(null) }} />
        ),
        headerRight: (
        <Foundation name="list" style={{padding: 20}} size={28} color="#fff"
        onPress={()=>{ navigation.navigate('DrawerOpen') }} />
        )
      });
    render() {
        return (
            <Image source={require('../../assets/back2-mdpi.png')} style={styles.backGround}>
                {/* <Text style={styles.title}>انضم الينا الان</Text> */}
            <KeyboardAvoidingView behavior='padding' style={styles.keyview}>
            <ScrollView style={{flex:1}}>
                <Text style={styles.label}>الاسم بالكامل</Text>                    
                <TextInput placeholder='اسم العضو' style={styles.input} />
                <Text style={styles.label}>البريد الالكتروني</Text>                    
                <TextInput placeholder='البريد الالكتروني' style={styles.input} />
                <Text style={styles.label}>رقم الهاتف</Text>                    
                <TextInput placeholder='رقم الهاتف' style={styles.input} />
                <Text style={styles.label}>الرسالة</Text>                    
                <TextInput 
                placeholder='محنوى الرسالة' 
                style={styles.input} />
                <TouchableHighlight style={styles.btn1}>
                    <Text style={styles.btnText}>ارسل الرسالة</Text>
                </TouchableHighlight>
                </ScrollView>
            </KeyboardAvoidingView>
            </Image>
        )
    }
}

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontFamily: 'NeoSansArabic',
        marginTop: 20,
        textAlign: 'center',
        padding: 10,
        fontSize: 20,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    keyview: {
        flex: 1,
        //justifyContent: 'space-around',
        //alignItems: 'center',
        //paddingVertical: 20,
        marginRight: 30,
        marginLeft: 30
    },
    label: {
        color: '#fff',
        fontFamily: 'NeoSansArabic',
        alignSelf: 'flex-end',
        marginBottom: 5,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    input: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        fontFamily: 'NeoSansArabic',
        padding: 10,
        marginBottom: 15,
    },
    backGround: {
        flex: 1,
        width: null,
        height: null,
        marginTop: Expo.Constants.statusBarHeight,
        paddingTop: Header.HEIGHT,
    },
    scrollView: {
        
    },
    btn1: {
        alignSelf: 'stretch',
        backgroundColor: '#0584f7',
        paddingRight:40,
        paddingLeft:40,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius:100,
      },
      btnText: {
        fontFamily: 'NeoSansArabic',
        color: 'white',
        textAlign: 'center',
        padding: 8,
      },
  })