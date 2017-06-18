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

import renderIf from 'render-if';


@observer
class TabLeft extends React.Component {
  constructor(props){
    super(props);
    this.state={
      yearlyIncome:0,
      monthlyRent:0,
      weeklyFood:0,
      dailyOther:0,
      allowanceComputed: false
    }
  }

  piggelfi(){
    console.log('inside piggelfi');
    console.log('value of this.state.yearlyIncome ', this.state.yearlyIncome);
    console.log('value of this.state.monthlyRent ', this.state.monthlyRent);
    console.log('value of this.state.weeklyFood ', this.state.weeklyFood);
    console.log('value of this.state.dailyOther ', this.state.dailyOther);

    mobxStore.setyearlyIncome(this.state.yearlyIncome);
    mobxStore.setmonthlyRent(this.state.monthlyRent);
    mobxStore.setweeklyFood(this.state.weeklyFood);
    mobxStore.setdailyOther(this.state.dailyOther);
    this.setState({
      allowanceComputed: true
    },()=>{
      console.log('value of this.State.allowanceComputed is ', this.state.allowanceComputed);
    });

    console.log('value of mobxStore.dailyAllowance ', mobxStore.dailyAllowance);

  }

  render(){
    return(
      <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text>PiggeldyProfile</Text>
        <Text>Welcome, {mobxStore.userName}</Text>
        <TextInput
           style={styles.moneyInput}
           placeholder='annual income'
           onChangeText={(e) => this.setState({yearlyIncome:e})}
           value={this.state.yearlyIncome}
         />
        <TextInput
           style={styles.moneyInputRed}
           placeholder='monthly rent'
           onChangeText={(e) => this.setState({monthlyRent:e})}
           value={this.state.monthlyRent}
         />
         <TextInput
           style={styles.moneyInputRed}
           placeholder='weekly food expenses'
           onChangeText={(e) => this.setState({weeklyFood:e})}
           value={this.state.weeklyFood}
         />
         <TextInput
           style={styles.moneyInputRed}
           placeholder='daily expenses'
           onChangeText={(e) => this.setState({dailyOther:e})}
           value={this.state.dailyOther}
         />
         <Button
           title='piggelfi'
           onPress={()=>this.piggelfi()}
         />

         {renderIf(this.state.allowanceComputed===true)(
          <View>
            <Text>Your daily allowance is: </Text>
            <Text>{mobxStore.dailyAllowance}</Text>
          </View>
         )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  moneyInput: {
    marginTop:5,
    marginBottom:5,
    height: 40,
    borderColor: 'seagreen',
    borderWidth: 1,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  moneyInputRed: {
    marginTop:5,
    marginBottom:5,
    height: 40,
    borderColor: 'tomato',
    borderWidth: 1,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  red: {
    color: 'red',
  },
});

export default TabLeft
