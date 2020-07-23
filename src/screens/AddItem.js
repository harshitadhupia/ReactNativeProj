/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
//import {addItem} from '../services/ItemService';
import {db} from '../config/db';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      mobile: '',
      isLoading: false,
    };
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleRedirect(){
    this.props.navigation.navigate('ListItem');
  }
  handleSubmit() {
    //addItem(this.state.name,this.state.email,this.state.mobile);
    console.log('Item saved successfully');

    db.ref('/Users').push({
           name: this.state.name,
           email: this.state.email,
           mobile: this.state.mobile,
         }).then((res) => {
           this.setState({
             name: '',
             email: '',
             mobile: '',
             isLoading: false,
           });
           this.props.navigation.navigate('ListItem');
         })
         .catch((err) => {
           console.error('Error found: ', err);
           this.setState({
             isLoading: false,
           });
         });
       }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add Item</Text>
        <TextInput
        style={styles.itemInput}
              placeholder={'Name'}
              value={this.state.name}
              onChangeText={(val) => this.inputValueUpdate(val, 'name')}
          />
          <TextInput
        style={styles.itemInput}
              placeholder={'Email'}
              value={this.state.email}
              onChangeText={(val) => this.inputValueUpdate(val, 'email')}
          />
           <TextInput
           keyboardType={'numeric'}
        style={styles.itemInput}
              placeholder={'Mobile'}
              value={this.state.mobile}
              onChangeText={(val) => this.inputValueUpdate(val, 'mobile')}
          />
        {/* <TextInput style={styles.itemInput} onChange={this.handleChange} /> */}
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleRedirect}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#2a8ab7',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  itemInput: {
    height: 50,
    marginBottom:10,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});

export default AddItem;
