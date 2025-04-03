import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
    placeholder?: string;
    value?: string;
    onChangeText?:(text: string) =>(void);
}



const InputComponent = ({placeholder,value,onChangeText} : Props) => {
  return (
        <SafeAreaView>
            <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} style={styles.input}/>
        </SafeAreaView>
      
    
  )
}

export default InputComponent

const styles= StyleSheet.create({
    input:{
        borderWidth:4,
        paddingVertical:4,
        paddingHorizontal:8,
        fontSize:24,
        borderColor:"pink",
        borderRadius:8,
    }
})