/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text } from 'react-native';

const UserDetailScreen = ({navigation}) =>{
    const datas = navigation.getParam('data');
    console.log(datas);
    return (
      <View>
        <Text>{datas.name}</Text>
        <Text>{datas.email}</Text>
        <Text>{datas.mobile}</Text>
      </View>
    );
}

export default UserDetailScreen;