import React from 'react';
import { Alert, Text,ScrollView,KeyboardAvoidingView, TextInput, View, Image, StatusBar, TouchableHighlight, Dimensions, Platform, PixelRatio, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Ionicons, Foundation } from '@expo/vector-icons';

import { Header } from 'react-navigation';
export default class join extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          name: '',
          email: '',
          phone: '',
          location: '',
          details: ''
        }
      }
    static navigationOptions = ({ navigation }) => ({
        title: 'انضم إلينا',
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
            <KeyboardAvoidingView behavior='height' style={styles.keyview}>
            <ScrollView style={{flex:1}}>
                <Text style={styles.label}>الاسم بالكامل</Text>                    
                <TextInput onChangeText={(text) => this.setState({name: text})} placeholder='اسم العضو' style={styles.input} />
                <Text style={styles.label}>البريد الالكتروني</Text>                    
                <TextInput onChangeText={(text) => this.setState({email: text})} placeholder='البريد الالكتروني' style={styles.input} />
                <Text style={styles.label}>رقم التليفون</Text>                    
                <TextInput onChangeText={(text) => this.setState({phone: text})} placeholder='رقم التليفون' style={styles.input} />
                <Text style={styles.label}>موقعك</Text>                    
                <TextInput onChangeText={(text) => this.setState({location: text})} placeholder='موقعك' style={styles.input} />
                <Text style={styles.label}>التفاصيل</Text>                    
                <TextInput 
                onChangeText={(text) => this.setState({details: text})}
                placeholder='تفاصيل أخرى' 
                style={styles.input} />
                <TouchableOpacity style={styles.btn1} onPress={()=>{
                    fetch('http://bodytec-iraq.com/api/join-us-service', {
                        method: 'POST',
                        body: JSON.stringify({
                            name: this.state.name,
                            email: this.state.email,
                            phone: this.state.phone,
                            location: this.state.location,
                            details: this.state.details,
                        })
                      })
                      .then((response) => response.json())
                      .then((responseJson) => {
                        if(responseJson.status_code == 200) {
                            Alert.alert('success','success')
                        }
                      })
                      .catch(error => {
                        Alert.alert('error',error)
                      })
                }}>
                    <Text style={styles.btnText}>انضم الينا</Text>
                </TouchableOpacity>
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
        borderRadius: 5
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