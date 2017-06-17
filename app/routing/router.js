import React, { Component } from 'react';
import { AppRegistry,
   View,
   Image,
   StyleSheet,
   TouchableOpacity,
   TextInput,
   Button,
   Text } from 'react-native';

import { addNavigationHelpers, StackNavigator, NavigationActions, TabNavigator } from 'react-navigation';

import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import mobxStore from '../mobx/store';
import TabLeft from '../screens/TabLeft';
import TabMiddle from '../screens/TabMiddle';
import TabRight from '../screens/TabRight';


const Tabs = TabNavigator({
  'Welcome!': {
    screen: TabLeft
  },
  TabMiddle: {
    screen: TabMiddle
  },
  TabRight: {
    screen: TabRight
  },
});

class Root extends React.Component {
  render() {
    return (
      <Tabs />
    );
  }
}

export default Root;
