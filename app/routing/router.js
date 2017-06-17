import React, { Component } from 'react';
import { AppRegistry,
   View,
   Image,
   StyleSheet,
   TouchableOpacity,
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


class TabMiddle extends React.Component {
  render(){
    return(
      <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text>This is the middle tab</Text>
        <Text></Text>
      </View>
    );
  }
}



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
  TabLeft: {
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

class Root extends React.Component {
  render() {
    return (
      <Tabs />
    );
  }
}

export default Root;


//
//
// class Search extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Search screen</Text>
//       </View>
//     )
//   }
// }
//
// class Index extends React.Component {
//   render() {
//     const {navigate} = this.props.navigation
//     return (
//       <View style={styles.container}>
//         <Text>Index screen</Text>
//         <TouchableOpacity onPress={()=>navigate("Search", {"title": "Search"})}>
//           <Text>Go to Search</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }
// }
//
// const AppNavigator = StackNavigator({
//   Index: { screen: Index },
//   Search: { screen: Search },
// }, {
//   initialRouteName: 'Index',
//   navigationOptions: {
//     header: ({state}) => {
//       return {title: state.params && state.params.title}
//     },
//   },
// });
//
// class Root extends React.Component {
//   render() {
//     return (
//       <AppNavigator />
//     );
//   }
// }

// export default Root;
