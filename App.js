import React from 'react';
import { AppLoading, Asset, Font } from 'expo';
import FitexpressHome from './screens/fitexpress/home/home'
import FitexpressGallery from './screens/fitexpress/gallery/gallery'

import Join from './screens/fitexpress/join/join'
import Contact from './screens/fitexpress/contact/contact'
import About from './screens/fitexpress/about/about'

import BodytecHome from './screens/bodytec/home/home'
import BodytecGallery from './screens/bodytec/gallery/gallery'

import { StyleSheet, Text, View, Image, StatusBar, ImageBackground, TouchableHighlight, Dimensions, Platform, PixelRatio } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import CustomDrawerBodytec from './CustomDrawerBodytec'
import CustomDrawerFitexpress from './CustomDrawerFitexpress'

const StackFitexpress = {
	FitexpressHome: {
		screen: FitexpressHome
	},
	Join: {
		screen: Join
  },
  FitexpressGallery: {
		screen: FitexpressGallery
  },
  Contact: {
		screen: Contact
  },
  About: {
		screen: About
  }
};

const StackBodytec = {
	BodytecHome: {
		screen: BodytecHome
	},
	Join: {
		screen: Join
  },
  BodytecGallery: {
		screen: BodytecGallery
  },
  Contact: {
		screen: Contact
  },
  About: {
		screen: About
  }
};

const DrawerRoutesFitexpress = {
	HomeStack: {
		screen: StackNavigator(StackFitexpress, { initialRouteName: 'FitexpressHome', })
	},
  galleryStack: {
    screen: StackNavigator(StackFitexpress, { initialRouteName: 'FitexpressGallery' })
  },
	joinStack: {
		screen: StackNavigator(StackFitexpress, { initialRouteName: 'Join' })
  },
  contactStack: {
		screen: StackNavigator(StackFitexpress, { initialRouteName: 'Contact' })
  },
  aboutStack: {
		screen: StackNavigator(StackFitexpress, { initialRouteName: 'About' })
  }
};

const DrawerRoutesBodytec = {
	HomeStack: {
		screen: StackNavigator(StackBodytec, { initialRouteName: 'BodytecHome', })
	},
  galleryStack: {
    screen: StackNavigator(StackBodytec, { initialRouteName: 'BodytecGallery' })
  },
	joinStack: {
		screen: StackNavigator(StackBodytec, { initialRouteName: 'Join' })
  },
  contactStack: {
		screen: StackNavigator(StackBodytec, { initialRouteName: 'Contact' })
  },
  aboutStack: {
		screen: StackNavigator(StackBodytec, { initialRouteName: 'About' })
  }
};



const RootNavigator = StackNavigator({
  fitexpress: {
    screen: StackNavigator({
      Drawer: {
        name: 'Drawer',
        screen: DrawerNavigator(DrawerRoutesFitexpress,{
          contentComponent: CustomDrawerFitexpress,
          drawerPosition: 'right'
        }
        ),
      },
      ...StackFitexpress
    },{headerMode: 'none'})
  },
  Bodytec: {
    screen: StackNavigator({
      Drawer: {
        name: 'Drawer',
        screen: DrawerNavigator(DrawerRoutesBodytec,{
          contentComponent: CustomDrawerBodytec,
          drawerPosition: 'right'
        }
        ),
      },
      ...StackBodytec
    },{headerMode: 'none'})
  }
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
    current: "fit"
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
      <RootNavigator
      ref={nav => { this.navigator = nav; }} />
    );
  }
}