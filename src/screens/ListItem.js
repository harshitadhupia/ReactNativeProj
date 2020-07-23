/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet,ActivityIndicator} from 'react-native';
import ItemComponent from '../components/ItemComponent';

import { db } from '../config/db';

let itemsRef = db.ref('/Users');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#B6A6BB',
    },
  });

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
          items: [],
        };
      }

   /*  state = {
        items: []
    } */

    componentDidMount() {
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            console.log("---------------------data1",data);
            let items = Object.values(data);
            console.log("--------------------data2",items);
            this.setState({items,
                isLoading: false,
            });
            console.log("-----------------data3",this.state.item);
         });
    }


    render() {
        if (this.state.isLoading){
            return (
              <View style={styles.preloader}>
                <ActivityIndicator size="large" color="#9E9E9E"/>
              </View>
            );
          }
        return (
            <View style={styles.container}>
                {
                    this.state.items.length > 0
                    ? <ItemComponent navigate={this.props.navigation.navigate} destination="UserDetailScreen" items={this.state.items} />
                    : <Text>No items</Text>
                }
            </View>
        );
    }
}
