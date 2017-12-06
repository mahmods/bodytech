import React from 'react';
import { Text,RefreshControl,ActivityIndicator,ScrollView,KeyboardAvoidingView, ListView, TextInput, View, Image, StatusBar, TouchableHighlight, Dimensions, Platform, PixelRatio } from 'react-native';
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Lightbox from 'react-native-lightbox';

import { Header } from 'react-navigation';

import { Ionicons, Foundation } from '@expo/vector-icons';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;
export default class join extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          refreshing: false,
          dataSource: null
        }
      }
    static navigationOptions = ({ navigation }) => ({
        title: 'الصور',
        headerTitle: 'الصور',
        headerStyle:{ marginTop: (Platform.OS === 'ios') ? 0 : Expo.Constants.statusBarHeight, position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 },
        headerTintColor: '#fff',
        headerTitleStyle: {fontFamily: 'NeoSansArabic',  fontWeight: 'normal',  alignSelf:'center'},
        headerLeft: (
          <Ionicons name="md-arrow-round-back" style={{padding: 20}} size={28} color="#fff"
          onPress={()=>{ navigation.goBack(null) }} />
        ),
        headerRight: (
        <Foundation name="list" style={{padding: 20}} size={28} color="#fff"
        onPress={()=>{ navigation.navigate('DrawerOpen') }} />
        )
      });

    componentDidMount() {
        return fetch('http://bodytec-iraq.com/api/get-galleries')
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            console.log(responseJson.galleries[0].image_url.ful_url)
            this.setState({
              isLoading: false,
              dataSource: responseJson.galleries,
            }, function() {
              // do something with new state
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
      _onRefresh() {
        this.setState({refreshing: true});
        fetch('http://bodytec-iraq.com/api/get-galleries')
        .then((response) => response.json())
        .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            console.log(responseJson.galleries[0].image_url.ful_url)
            this.setState({
              isLoading: false,
              refreshing: false,
              dataSource: responseJson.galleries,
            }, function() {
            });
          })
          .catch((error) => {
            console.error(error);
          });
          
      }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.backGround}>
                <ActivityIndicator />
              </View>
            );
          }
        return (
            <View style={styles.backGround}>
            <ScrollView style={{width: WINDOW_WIDTH, }} refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }>
            <View style={{flex: 1, flexDirection: 'row', flexWrap:'wrap', justifyContent: 'center', alignItems:'center'}}>
            {this.state.dataSource.map(function(object, i){
              return (
              <View key={i} style={{backgroundColor: '#3d3d3d', padding: '2%', margin: '2%', width:'45%'}}>
              <Lightbox navigator={this.navigation} activeProps={{resizeMode: "contain"}}>
              <Image resizeMode="cover" style={styles.image} source={{uri: object.image_url.ful_url}}/>
              </Lightbox>
              </View>);
            })} 
            </View>
            </ScrollView>
            </View>
        )
    }
}

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backGround: {
        flex: 1,
        
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: BASE_PADDING,
        marginTop: Expo.Constants.statusBarHeight,
        paddingTop: Header.HEIGHT,
      },
    image: {
      flex: 1,
      height: WINDOW_WIDTH * 0.41,
    }
  })