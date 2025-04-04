import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import TodoListItem from './TodoListItem';

type Props = {
    todoList?: string[];
}

const TodoList = ({todoList}:Props) => {

   
  return (
    <FlatList 
    contentContainerStyle={{gap:4}}
    data={todoList}
    keyExtractor={(todo) => todo}
    renderItem={({item})=> <TodoListItem todo={item}/>}
    />
  )
}

export default TodoList

