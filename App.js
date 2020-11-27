import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; import { createBottomTabNavigator } from 'react-navigation-tabs';
import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

var AppNavigator = createSwitchNavigator({
  BookTransactionScreen:TransactionScreen,
  SearchScreen : SearchScreen
});

const AppContainer = createAppContainer(AppNavigator)