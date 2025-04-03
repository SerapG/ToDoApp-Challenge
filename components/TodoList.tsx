import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'

type Props = {
    todoList?: string[];
}

const TodoList = ({todoList}:Props) => {

    const handleRenderItem = ({item}: {item:string}) => {
        return(<Text style={styles.item} >{item}</Text>)
    }

  return (
    <FlatList 
    data={todoList}
    keyExtractor={(todo) => todo}
    renderItem={handleRenderItem}
    />
  )
}

export default TodoList

const styles = StyleSheet.create({
    item:{
        fontSize:20,

    },
})