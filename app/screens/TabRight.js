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


@observer
class TabRight extends React.Component {
  render(){
    return(
      <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text>This is the right tab</Text>
      </View>
    );
  }
}

export default TabRight
