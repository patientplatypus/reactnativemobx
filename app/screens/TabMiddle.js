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
class TabMiddle extends React.Component {
  render(){
    return(
      <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text>This is the middle tab</Text>
        <Text>Counter Add One Counter: {mobxStore.counter}</Text>
        <Text>Counter Subtract One Counter: {mobxStore.counter2}</Text>
        <Text></Text>
      </View>
    );
  }
}

export default TabMiddle
