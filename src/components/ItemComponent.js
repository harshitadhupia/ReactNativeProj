/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {ListItem} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const ItemComponent = (props) =>{
    return (
        <ScrollView style={styles.container}>
          {
            props.items.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  chevron
                  bottomDivider
                  title={item.name}
                  subtitle={item.email}
                  onPress={() => props.navigate(props.destination,{data:item})}/>
              );
            })
          }
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    itemsList: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    itemtext: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default ItemComponent;