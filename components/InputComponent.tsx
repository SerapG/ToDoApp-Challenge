import { View, Text,TextInput,StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { isSmallDevice } from '@/constants/screenWidths';

type Props = {
    placeholder?: string;
    value?: string;
    onChangeText?:(text: string) =>(void);
}



const InputComponent = ({placeholder,value,onChangeText} : Props) => {
    const {width} = useWindowDimensions();
  return (
        <SafeAreaView>
            <TextInput 
            value={value} 
            onChangeText={onChangeText} 
            placeholder={placeholder} 
            style={[styles.input, {fontSize: isSmallDevice(width) ? 22: 34,
                borderWidth: isSmallDevice(width) ? 4: 6
            }]}
            autoComplete="off"
            />
        </SafeAreaView>
      
    
  )
}

export default InputComponent

const styles= StyleSheet.create({
    input:{
        paddingVertical:4,
        paddingHorizontal:8,
        fontSize:24,
        borderColor:"maroon",
        borderRadius:8,
    }
})