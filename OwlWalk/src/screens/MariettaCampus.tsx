import { View, Text, StyleSheet, Touchable, Image } from 'react-native'
import React from 'react'

const ETB =  require("../../assets/images/ETB.jpg")

export default function MariettaCampus({ navigation }){
  return (
    <View style= {styles.container}>
      <Text style = {styles.label}>Marietta Campus</Text>
      <Image source ={ETB} style={styles.Image}/>
      <Text style ={styles.boxSelection1}>Engineering Building </Text>
      <Text style ={styles.boxSelection2}>J.Wilson Student Center</Text>
      <Text style ={styles.boxSelection3}>Globe</Text>
      <Text style ={styles.boxSelection4}>Lawrence V. Johnson Library</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFAF0',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
  },
  boxSelection1: {
    padding: 40,
    backgroundColor: '#EEE8AA'
  },
  boxSelection2: {
    padding: 20,
    backgroundColor: '#F0E68C'
  },
  boxSelection3: {
    padding: 20,
    backgroundColor: '#F0E68C'
  },
  boxSelection4: {
    padding: 20,
    backgroundColor: '#F0E68C'
  },
  Image: {
    
  }
})


