import React from 'react';
import { Text, View, Image, StatusBar, TouchableHighlight, Dimensions, Platform, PixelRatio } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles'

export default class Home extends React.Component {
    static navigationOptions = {
        drawerLabel: 'الرئيسية',
        
      };
    render() {
      return (
              <Swiper 
                style={styles.wrapper} 
                dotColor="rgb(94,96,100)"
                activeDotColor="rgb(252,252,252)"
                loop={false}
                index={4}>
          <Image source={require('../../assets/back-mdpi.png')} style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </Image>
          <Image source={require('../../assets/back2-mdpi.png')} style={styles.slide1}>
            <View style={styles.trapezoid}>
            <Text>تواصل معنا</Text>
            <Text>تواصل معنا</Text>
            <Text>تواصل معنا</Text>
            <Text>تواصل معنا</Text>
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
  
            <TouchableHighlight style={[styles.btn4, {backgroundColor: '#ea3c3c'}]}>
                <Text style={styles.btnText}>تواصل معنا</Text>
            </TouchableHighlight>
  
            <TouchableHighlight style={styles.btn4}>
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
            <TouchableHighlight style={styles.btn2}>
                <Text style={[styles.btnText, {padding: 19}]}>تعرف على مركز بودي تيك</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.btn3}>
                <Text style={[styles.btnText, {padding: 20, fontSize: 18}]}>تواصل معنا</Text>
            </TouchableHighlight>
          </Image>
        </Swiper>
      );
    }
  }