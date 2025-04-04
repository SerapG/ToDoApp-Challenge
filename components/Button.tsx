import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { isSmallDevice } from '@/constants/screenWidths';

type Props={
    variant?: "primary" | "secondary" | "destructive" | "success";
    text?: string;
    onPress?: () => void;
}

const Button = ({text,onPress,variant= "primary"}:Props) => {
    let backgroundColor = "darkseagreen"
    const {width,height} = useWindowDimensions();

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
    style={[styles.container,{backgroundColor:backgroundColor, padding: isSmallDevice(width) ? 8  :12 }]}>
      <Text style={[styles.text, {fontSize:isSmallDevice(width) ? 22 : 32 }]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        backgroundColor:"pink",
        paddingHorizontal:8,
        alignSelf:"flex-start",
        borderRadius:8,
        marginTop:5,
        borderWidth:4,
        borderColor:"maroon",
    },
    text:{
        color:"white",
    },
})