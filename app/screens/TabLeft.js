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
class TabLeft extends React.Component {

  addOne(){
    mobxStore.addOne();
  }
  subtractOne(){
    mobxStore.subtractOne();
  }
  render(){
    return(
      <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Button
          title='counterbutton'
          onPress={this.addOne}
        />
        <Button
          title='counterbutton2'
          onPress={this.subtractOne}
        />
        <Text>Counter Add One Counter: {mobxStore.counter}</Text>
        <Text>Counter Subtract One Counter: {mobxStore.counter2}</Text>
        <Text>This is the left tab</Text>
      </View>
    );
  }
}

export default TabLeft
