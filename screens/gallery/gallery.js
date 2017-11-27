import React from 'react';
import { Text,ActivityIndicator,ScrollView,KeyboardAvoidingView, ListView, TextInput, View, Image, StatusBar, TouchableHighlight, Dimensions, Platform, PixelRatio } from 'react-native';
import Swiper from 'react-native-swiper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Lightbox from 'react-native-lightbox';


import { Ionicons, Foundation } from '@expo/vector-icons';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;
export default class join extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          dataSource: null
        }
      }
    static navigationOptions = ({ navigation }) => ({
        title: 'الصور',
        headerStyle: {position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0},
        headerTintColor: 'rgba(0,0,0,0)',
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
            <ScrollView style={{width: WINDOW_WIDTH}}>
            {this.state.dataSource.map(function(object, i){
                return (<Lightbox key={i}><Image resizeMode="contain" style={{flex: 1,height: 150,}} source={{uri: object.image_url.ful_url}}/></Lightbox>);
            })}
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
    },
    contain: {
        flex: 1,
        height: 150,
    }    
  })