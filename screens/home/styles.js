import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    wrapper: {
      
    },
    trapezoid: {
      width: 300,
      height: 0,
      borderBottomWidth: 200,
      borderBottomColor: '#0584f7',
      borderLeftWidth: 10,
      borderLeftColor: 'transparent',
      borderStyle: 'solid',
      alignSelf: "flex-end",
    },
    btnText: {
      fontFamily: 'NeoSansArabic',
      color: 'white',
      textAlign: 'center',
      padding: 8,
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
      justifyContent: 'space-around',
      alignItems: 'center',
      width: null,
      height: null,
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontFamily: 'NeoSansArabic',
      textAlign: 'center',
      padding: 15,
      fontSize: 14,
      lineHeight: 30
    },
    logo: {
      alignSelf: "flex-end",
      marginRight: 20,
      width: 250,
      height: 43,
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
      paddingTop:5,
      paddingBottom:5,
      paddingRight:25,
      paddingLeft:25,
      margin: 10
    }
  })