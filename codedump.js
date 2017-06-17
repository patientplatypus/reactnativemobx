import React, { Component } from 'react';
import { AppRegistry,
   View,
   Image,
   StyleSheet,
   Text } from 'react-native';

export default class reactNativeHelloWorld extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={styles.bigblue}>just bigblue</Text>
        <View style={{flex: 1, backgroundColor: 'skyblue'}} >
          <Text style={styles.red}>just red</Text>
        </View>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('reactNativeHelloWorld', () => reactNativeHelloWorld);






// @observer
// class TabLeft extends React.Component {
//   addOne(){
//     mobState.addOne();
//   }
//   subtractOne(){
//     mobState.subtractOne();
//   }
//   render(){
//     return(
//       <View>
//         <Text></Text>
//         <Text></Text>
//         <Text></Text>
//         <Button
//           title='counterbutton'
//           onPress={this.addOne}
//         />
//         <Button
//           title='counterbutton2'
//           onPress={this.subtractOne}
//         />
//         <Text>Counter Add One Counter: {mobState.counter}</Text>
//         <Text>Counter Subtract One Counter: {mobState.counter2}</Text>
//         <Text>This is the left tab</Text>
//       </View>
//     );
//   }
// }


// @observer
// class TabMiddle extends React.Component {
//   render(){
//     return(
//       <View>
//         <Text></Text>
//         <Text></Text>
//         <Text></Text>
//         <Text>This is the middle tab</Text>
//         <Text></Text>
//         <Text>Counter Add One Counter: {mobState.counter}</Text>
//         <Text>Counter Subtract One Counter: {mobState.counter2}</Text>
//       </View>
//     );
//   }
// }











class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'This is HomeScreen',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'this is ProfileScreen',
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Text>Hello there {params.name}</Text>
    );
  }
}

export const StackApp = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

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
  StackApp: {
    screen: StackApp
  }
});
