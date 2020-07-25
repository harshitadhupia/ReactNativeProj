/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {TextInput, Text, Button, Alert, View, StyleSheet} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {db} from '../config/db';

export default class Home extends Component {
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

  handleSubmit(values){
    //addItem(this.state.name,this.state.email,this.state.mobile);
    console.log('Item saved successfully',values);
    this.setState({
      name: values.name,
      email: values.email,
      mobile: values.mobile,
      isLoading: false,
    });

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
           console.error('Error found----------------------', err);
           this.setState({
             isLoading: false,
           });
         });
       }


  render() {
    const inputStyle = {
      borderWidth: 1,
      borderColor: '#4e4e4e',
      padding: 12,
      marginBottom: 5,
    };
   const btn = {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 20,
      alignSelf: 'stretch',
      justifyContent: 'center',
    };
  

    return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          mobile: '',
        }}
        onSubmit={values => this.handleSubmit(values)}
        validationSchema={yup.object().shape({
          name: yup.string().required('Please, provide your name!'),
          email: yup.string().email().required(),
          mobile: yup
            .string()
            .min(4)
            .max(10, 'mobile should not excced 10 chars.')
            .required(),
        })}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <View style={styles.formContainer}>
            <TextInput
              value={values.name}
              style={inputStyle}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              placeholder="Name"
            />
            {touched.name && errors.name && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
                {errors.name}
              </Text>
            )}
            <TextInput
              value={values.email}
              style={inputStyle}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="E-mail"
            />
            {touched.email && errors.email && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
                {errors.email}
              </Text>
            )}
            <TextInput
            keyboardType={'numeric'}
              value={values.mobile}
              style={inputStyle}
              onChangeText={handleChange('mobile')}
              placeholder="mobile"
              onBlur={() => setFieldTouched('mobile')}
              secureTextEntry={true}
            />
            {touched.mobile && errors.mobile && (
              <Text style={{fontSize: 12, color: '#FF0D10'}}>
                {errors.mobile}
              </Text>
            )}
            <Button
              color="#3740FE"
              title="Add"
              disabled={!isValid}
              onPress={handleSubmit}
            />
            <Button
              style={btn}
              color="#3740FE"
              title="View"
              onPress={this.handleRedirect}
            />
          </View>
        )}
      </Formik>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 50,
  },
  
});

console.disableYellowBox = true;
