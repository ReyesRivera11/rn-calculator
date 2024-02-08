import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
const Buttons = ({value,color,size,colorText,icon,funcion}) => {

  return (
    <TouchableOpacity onPress={funcion}  style={[styles.button, { backgroundColor: color,width:size }]}>
        <Text style={[{color:colorText},styles.text]}>{icon || value}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button:{
        shadowColor:"black",
        height:70,
        justifyContent:"center",
        alignItems: "center",
        borderRadius:10,
    },
    text:{
      fontSize:30,
      fontWeight:"bold",
    }
  });
export default Buttons