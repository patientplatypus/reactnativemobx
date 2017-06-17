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

@observer
class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      userName:''
    }
  }
  sendtext(){
    var senduser = this.state.userName;
    this.setState({
      userName:''
    });
    fetch('http://localhost:3000/sndtodb/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text:senduser
      })
    })
    .then((response) => {
      // if (response.data==="saveOk"){
        mobxStore.setUser(senduser);
      // }
    })
    .done();
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text>Welcome to the Home Page!</Text>
        <TextInput
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(e) => this.setState({userName:e})}
           value={this.state.userName}
         />
         <Button
           title='Send Text'
           onPress={()=>this.sendtext()}
         />
         <Button
           title="Go to Tabs"
           onPress={() =>
             navigate('Tabs', { name: 'Yolo' })
           }
         />
      </View>
    );
  }
}

export default HomePage
