import { DrawerItems, SafeAreaView } from 'react-navigation';
import React from 'react';
import { StyleSheet, ScrollView, Image, Text, View } from 'react-native';
import { style } from 'expo/src/Font';

export default CustomDrawer = (props) => (
  <ScrollView style={styles.scrollView}>
  <View style={styles.logoWrapper}>
    <Image source={require('./assets/logo.png')} style={styles.logo}/>
  </View>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} 
      labelStyle = {styles.label}
      itemStyle = {{justifyContent: 'flex-end'}}
      activeTintColor='#ffffff'
      inactiveTintColor='#525252'
      activeBackgroundColor='#0584f7'  />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollView: {
      marginTop: 40
  },
  logoWrapper: {
      borderBottomWidth: 0.5,
      borderBottomColor: '#d6d7da',
      padding: 40
  },
  logo: {
    alignSelf: "center",
    width: 250,
    height: 43,
  },
  container: {
    flex: 1,
  },
  label: {
    fontFamily: 'NeoSansArabic',
    fontWeight: 'normal',
  }
});
