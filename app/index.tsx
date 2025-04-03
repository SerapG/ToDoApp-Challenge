import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import InputComponent from '@/components/InputComponent'
import { useState } from 'react'

const index = () => {
    const [todo,setTodo]= useState("")
  return (
    <View style={styles.container} >
      <InputComponent value={todo} onChangeText={setTodo} placeholder="yapilacak.."/>
    </View>
  )
}

export default index

const styles=StyleSheet.create({
    container:{
        padding:16,
        gap:4,
    }
})