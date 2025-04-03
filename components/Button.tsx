import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props={
    text?: string;
    onPress?: () => void;
}

const Button = ({text,onPress}:Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        backgroundColor:"pink",
        paddingHorizontal:8,
        paddingVertical:4,
        alignSelf:"flex-start",
        borderRadius:8,
        marginTop:5,
    },
    text:{
        fontSize:18,
        color:"white",
    },
})