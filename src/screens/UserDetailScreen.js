/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import {db} from '../config/db';

class UserDetailScreen extends Component {

  componentDidMount() {
    console.log('item is',this.props.navigation.state.params.data);
    const id = this.props.navigation.state.params.data.id;
    //console.log('id is', JSON.parse( JSON.stringify(id)));
  }

    openTwoButtonAlert=()=>{
        Alert.alert(
          'Delete User',
          'Are you sure?',
          [
            {text: 'Yes', onPress: () => this.deleteUser()},
            {text: 'No', onPress: () => console.log('No item was removed'), style: 'cancel'},
          ],
          { 
            cancelable: true
          }
        );
      }

      deleteUser() {
         db.ref('/Users').child(this.props.navigation.state.params.data.id).remove().then((res) => {
          console.log('Item removed from database')
          this.props.navigation.navigate('ListItem');
         }); 
        }

    render() {
    return (
      <View>
        <Text>{this.props.navigation.state.params.data.name}</Text>
        <Text>{this.props.navigation.state.params.data.email}</Text>
        <Text>{this.props.navigation.state.params.data.mobile}</Text>
        <Button
            title='Delete'
            onPress={this.openTwoButtonAlert}
            color="#E37399"
          />
      </View>
    );
    }
}

export default UserDetailScreen;