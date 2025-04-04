import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props={
    variant?: "primary" | "secondary" | "destructive" | "success";
    text?: string;
    onPress?: () => void;
}

const Button = ({text,onPress,variant= "primary"}:Props) => {
    let backgroundColor = "darkseagreen"

    switch (variant) {
      case 'primary':
        backgroundColor = "darkseagreen"
        break;
      case 'secondary':
        backgroundColor= "indianred"
        break;
      case 'destructive':
        backgroundColor="plum"
        break;
      case 'success':
        backgroundColor="yellowgreen"
        break;
      default:
        backgroundColor="darkseagreen"
        break;
    }

  return (
    <TouchableOpacity 
    onPress={onPress} 
    style={[styles.container,{backgroundColor:backgroundColor}]}>
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