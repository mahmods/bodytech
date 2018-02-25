import React from 'react';
import { StyleSheet, Button } from 'react-native';

export default class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'اتصل بنا'
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });