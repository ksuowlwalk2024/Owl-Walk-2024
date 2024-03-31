
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text,Image} from 'react-native';
const Logo = require("../../assets/images/OWL(1).png")

export default function LogInScreen({ navigation }){
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 
  const handleLogin = () => {
    // Here, you would validate the credentials and navigate to the next screen if successful
    console.log(username, password);
    // For example: navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} 
      style={{ width:300, height: 300}}/>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Log In" onPress={handleLogin} color = '#ffd700'  />

      <View style={styles.space} /> 

      <Button title="Guest?" onPress={() => navigation.navigate("Campus")} color = '#735240' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFAF0',
  },
  input: {
    width: '80%',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    
  },
  Text:{
    textAlign: 'center',
    

  },
  space:{
    width:5,
    height:5,
  }
});


