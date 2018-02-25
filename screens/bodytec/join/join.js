import React from 'react';
import { Alert,TouchableWithoutFeedback, Keyboard, Text,ScrollView,KeyboardAvoidingView, TextInput, View, Image, StatusBar, TouchableOpacity, Dimensions, Platform, PixelRatio, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Ionicons, Foundation } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

import { Header } from 'react-navigation';
export default class join extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
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

<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Image source={require('../../../assets/back2-mdpi.png')} style={styles.backGround}>
                {/* <Text style={styles.title}>انضم الينا الان</Text> */}
            <KeyboardAvoidingView keyboardVerticalOffset={30} behavior='padding' style={styles.keyview}>
            <ScrollView  keyboardShouldPersistTaps='always' style={{flex:1, padding:20}}>
                <Text style={styles.label}>الاسم بالكامل</Text>                    
                <TextInput ref='name' onSubmitEditing={(event) => {this.refs.email.focus()}} returnKeyType = {"next"} autoFocus = {true} onChangeText={(text) => this.setState({name: text})} placeholder='اسم العضو' style={styles.input} />
                <Text style={styles.label}>البريد الالكتروني</Text>                    
                <TextInput ref='email' keyboardType='email-address' onSubmitEditing={(event) => {this.refs.phone.focus()}} returnKeyType = {"next"} onChangeText={(text) => this.setState({email: text})} placeholder='البريد الالكتروني' style={styles.input} />
                <Text style={styles.label}>رقم الهاتف</Text>                    
                <TextInput ref='phone' keyboardType='phone-pad' onSubmitEditing={(event) => {this.refs.location.focus()}} returnKeyType = {"next"} onChangeText={(text) => this.setState({phone: text})} placeholder='رقم الهاتف' style={styles.input} />
                <Text style={styles.label}>موقعك</Text>                    
                <TextInput ref='location' onSubmitEditing={(event) => {this.refs.details.focus()}} returnKeyType = {"next"} onChangeText={(text) => this.setState({location: text})} placeholder='موقعك' style={styles.input} />
                <Text style={styles.label}>الرسالة</Text>                    
                <TextInput ref='details'
                returnKeyType = {"send"}
                onChangeText={(text) => this.setState({details: text})}
                placeholder='تفاصيل أخرى' 
                style={styles.input} />
                <TouchableOpacity style={styles.btn1} disabled={this.state.isLoading} onPress={()=>{
                    this.setState({isLoading: true})
                    fetch('http://bodytec-iraq.com/api/join-us-service', {
                        method: 'POST',
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                          },
                        body: JSON.stringify({
                            'name': this.state.name,
                            'email': this.state.email,
                            'phone': this.state.phone,
                            'location': this.state.location,
                            'details': this.state.details,
                        })
                      })
                      .then((response) => response.json())
                      .then((responseJson) => {
                        if(responseJson.status_code == 200) {
                            this.refs.name.clear()
                            this.refs.email.clear()
                            this.refs.phone.clear()
                            this.refs.location.clear()
                            this.refs.details.clear()
                            Alert.alert('تم الإرسال','لقد تم ارسال رسالتك بنجاح سيتم الرد عليك فى أقرب وقت')
                        } else {
                            if(responseJson.error.errors) {
                                Alert.alert('حدث خطأ', error)        
                            }
                            Alert.alert('حدث خطأ','رجاء أعد المحاولة')
                        }
                        this.setState({isLoading: false})
                      })
                      .catch(error => {
                        Alert.alert('حدث خطأ', error)
                        this.setState({isLoading: false})
                      })
                }}>
                    <Text style={styles.btnText}>ارسل الرسالة</Text>
                </TouchableOpacity>
                    <ActivityIndicator style={{opacity: this.state.isLoading ? 1.0 : 0.0}} />
                </ScrollView>
            </KeyboardAvoidingView>
            </Image>
            </TouchableWithoutFeedback>

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
        //marginRight: 30,
        //marginLeft: 30
    },
    label: {
        fontSize: scale(12),
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
        padding: moderateScale(10),
        marginBottom: scale(15),
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