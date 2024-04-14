import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const mCampus = require("../../assets/images/mariettacampus.jpg")
const kCampus = require("../../assets/images/kennesawcampus.jpg")

export default function ChooseCampus({ navigation }){
  return (
    <View style={styles.container}>
      <Text style={styles.Header}>Choose Campus</Text>
      <View style={styles.Hspace}/>
        <TouchableOpacity onPress= {() => navigation.navigate("Marietta Campus")}>
            <Image source ={mCampus} style={styles.image}/>
            <Text style={styles.Names}>Marietta</Text>

        </TouchableOpacity>

        <View style={styles.space}/>

        <TouchableOpacity onPress= {() => navigation.navigate("Kennesaw Campus")}>
            <Image source ={kCampus} style={styles.image}/>
            <Text style={styles.Names}>Kennesaw </Text>
        </TouchableOpacity>
      
    </View>

  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFAF0',
    },

    image:{
        width:200, 
        height: 150,
        
    },

    Header:{
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'geometria',
        fontWeight: 'bold',

    },
    Hspace:{
        height:10,

    },

    Names: {
        fontSize: 25,
        textAlign: 'center',
    },

    space:{
        width:50,
        height:100,
      }


})

