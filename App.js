import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home';
import AddItem from './src/screens/AddItem';
import ListItem from './src/screens/ListItem';
import UserDetailScreen from './src/screens/UserDetailScreen';
import ItemComponent from './src/components/ItemComponent';
import Location from './src/screens/Location';
console.disableYellowBox = true;

const navigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {title: 'Add User'},
    },
    AddItem: AddItem,
    ListItem: {
      screen: ListItem,
      navigationOptions: {title: 'View Users'},
    },
    UserDetailScreen: {
      screen: UserDetailScreen,
      navigationOptions: {title: 'User Detail'},
    },
    ItemComponent: {
      screen: ItemComponent,
      navigationOptions: {title: 'ItemComponent'},
    },
    Location: Location,
  },
  {
    initialRouteName: 'Location',
  },
);

export default createAppContainer(navigator);
