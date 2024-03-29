/*Test screen for OWL WALK */

import React, {useState} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

const HelloWorldApp = () => {
const [Appname, setName] = useState('OwlWalk')

const onClickHandler =() =>{
  
}


  return (
    
    <View 
      style={
        styles.body

      }>
      <Text style ={styles.headline} >{Appname}</Text>
      <Button title= 'Log in' onPress={onClickHandler}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFAF0',
    
    
  },

  headline: {
    fontSize: 30,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold'
  }


})
export default HelloWorldApp;