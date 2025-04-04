import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button';

type Props = {
    todo? : string;
}

const TodoListItem = ({todo}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{todo}</Text>
      <Button text='sil' variant='secondary'/>
    </View>
  )
}

export default TodoListItem

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"papayawhip",
        alignItems:"center",
        padding:16,
        borderRadius:8,
        borderColor:"rosybrown",
        borderWidth:3,
    },
    text:{
        fontSize:20,

    },
})