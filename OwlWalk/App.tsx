/*Test screen for OWL WALK */

import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './src/screens/LogInScreen'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import ChooseCampus from './src/screens/ChooseCampus';

const Stack = createNativeStackNavigator();

function App(){
return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name='Campus' component={ChooseCampus} />
    </Stack.Navigator>
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
})
export default App;