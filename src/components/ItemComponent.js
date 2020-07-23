/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {ListItem} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


class ItemComponent extends Component {
  constructor(props) {
      
    super(props);
      }

  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  render() {
    return (
        <ScrollView style={styles.container}>
          {
            this.props.items.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  chevron
                  bottomDivider
                  title={item.name}
                  subtitle={item.email}
                  onPress={() => {
                    this.press.navigation.navigate('UserDetailScreen')
                  }}/>
              );
            })
          }
      </ScrollView>
    );
  }
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