import {Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles';
const MyButton = ({value,color,size,colorText,icon,fn}) => {
  return (
    <TouchableOpacity onPress={()=>fn()} style={[styles.button, { backgroundColor: color,width:size }]}>
        <Text style={[{color:colorText},styles.text]}>{icon || value}</Text>
    </TouchableOpacity>
  )
}

export default MyButton