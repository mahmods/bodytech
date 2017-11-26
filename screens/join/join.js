import React from 'react';
import { Text,ScrollView, TextInput, View, Image, StatusBar, TouchableHighlight, Dimensions, Platform, PixelRatio } from 'react-native';
import Swiper from 'react-native-swiper';

export default class join extends React.Component {
static navigationOptions = {
    drawerLabel: 'انضم إلينا'
    };
    render() {
        return (
            <Image source={require('../../assets/back2-mdpi.png')} style={styles.backGround}>
                <Text style={styles.title}>انضم الينا الان</Text>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.label}>الاسم بالكامل</Text>                    
                <TextInput placeholder='اسم العضو' style={styles.input} />
                <Text style={styles.label}>البريد الالكتروني</Text>                    
                <TextInput placeholder='البريد الالكتروني' style={styles.input} />
                <Text style={styles.label}>رقم الهاتف</Text>                    
                <TextInput placeholder='رقم الهاتف' style={styles.input} />
                <Text style={styles.label}>التفاصيل</Text>                    
                <TextInput 
                placeholder='التفاصيل' 
                multiline = {true} 
                maxLength={40}
                numberOfLines = {4} 
                style={styles.input} />
                <TouchableHighlight style={styles.btn1}>
                    <Text style={styles.btnText}>انضم الينا</Text>
                </TouchableHighlight>
            </ScrollView>
            </Image>
        )
    }
}

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontFamily: 'NeoSansArabic',
        marginTop: 30,
        padding: 30
    },
    contentContainer: {
        paddingVertical: 20
      },
    label: {
        color: '#fff',
        fontFamily: 'NeoSansArabic',
        alignSelf: 'flex-end',
        marginBottom: 5
    },
    input: {
        backgroundColor: '#fff',
        fontFamily: 'NeoSansArabic',
        width: Dimensions.get('window').width - 40,
        height: 40,
        marginBottom: 20
    },
    backGround: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
      width: null,
      height: null,
    },
    scrollView: {
        
    },
    btn1: {
        backgroundColor: '#0584f7',
        paddingRight:40,
        paddingLeft:40,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius:100,
        alignSelf: "flex-end",
        width: Dimensions.get('window').width - 40,
      },
      btnText: {
        fontFamily: 'NeoSansArabic',
        color: 'white',
        textAlign: 'center',
        padding: 8,
      },
  })