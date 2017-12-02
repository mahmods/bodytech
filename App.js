import React from 'react';
import { AppLoading, Asset, Font } from 'expo';
import Home from './screens/home/home'
import Join from './screens/join/join'
import Gallery from './screens/gallery/gallery'
import Contact from './screens/contact/contact'
import About from './screens/about/about'

import { StyleSheet, Text, View, Image, StatusBar, ImageBackground, TouchableHighlight, Dimensions, Platform, PixelRatio } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import CustomDrawer from './CustomDrawer'

const Stack = {
	Home: {
		screen: Home
	},
	Join: {
		screen: Join
  },
  Gallery: {
		screen: Gallery
  },
  Contact: {
		screen: Contact
  },
  About: {
		screen: About
	},
};

const DrawerRoutes = {
	HomeStack: {
		screen: StackNavigator(Stack, { initialRouteName: 'Home', })
	},
  galleryStack: {
    screen: StackNavigator(Stack, { initialRouteName: 'Gallery' })
  },
	joinStack: {
		screen: StackNavigator(Stack, { initialRouteName: 'Join' })
  },
  contactStack: {
		screen: StackNavigator(Stack, { initialRouteName: 'Contact' })
  },
  aboutStack: {
		screen: StackNavigator(Stack, { initialRouteName: 'About' })
  },
};

const RootNavigator = StackNavigator({
		Drawer: {
			name: 'Drawer',
			screen: DrawerNavigator(DrawerRoutes,{
          contentComponent: CustomDrawer,
          drawerPosition: 'right'
        }
			),
		},
		...Stack
	},
		{
      headerMode: 'none',
      
		}
	);

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/main-bg.png'),
      require('./assets/logo.png'),
      require('./assets/back2-mdpi.png'),
      require('./assets/back-mdpi.png')
    ]);

    const fontAssets = cacheFonts([
      {"Arial": require("./fonts/arial.ttf")},
      {"NeoSansArabic": require("./fonts/NeoSansArabic.ttf")}
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);

  }

  
  
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => {
            this.setState({ isReady: true })
          }}
          onError={console.warn}
        />
      );
    }
    return (
      <RootNavigator ref={nav => { this.navigator = nav; }} />
    );
  }
}