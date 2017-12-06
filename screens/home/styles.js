import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export default styles = StyleSheet.create({
    wrapper: {
      
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
    btnText: {
      fontFamily: 'NeoSansArabic',
      color: 'white',
      textAlign: 'center',
      padding: 8,
      fontSize: scale(10)
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
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 50,
      width: null,
      height: null,
    },
    text: {
      color: '#fff',
      fontFamily: 'NeoSansArabic',
      textAlign: 'center',
      padding: 15,
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