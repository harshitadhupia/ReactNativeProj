import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home';
import AddItem from './src/screens/AddItem';
import ListItem from './src/screens/ListItem';
import UserDetailScreen from './src/screens/UserDetailScreen';
import ItemComponent from './src/components/ItemComponent';
console.disableYellowBox = true;

const navigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {title: 'Home'},
    },
    AddItem: AddItem,
    ListItem: {
      screen: ListItem,
      navigationOptions: {title: 'ListItem'},
    },
    UserDetailScreen: {
      screen: UserDetailScreen,
      navigationOptions: {title: 'UserDetailScreen'},
    },
    ItemComponent: {
      screen: ItemComponent,
      navigationOptions: {title: 'ItemComponent'},
    },
  },
  {
    initialRouteName: 'AddItem',
  },
);

export default createAppContainer(navigator);
