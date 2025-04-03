import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import InputComponent from '@/components/InputComponent'
import Button from '@/components/Button'
import { useState } from 'react'
import TodoList from '@/components/TodoList'


const index = () => {
    const [todoList,setTodolist] = useState<string[]>([])
    const [todo , setTodo]= useState("")

    console.log({todoList})

    const handlePressed = () => {
        setTodolist([...todoList, todo])
        setTodo("");
    }
  return (
    <View style={styles.container} >
      <InputComponent value={todo} onChangeText={setTodo} placeholder="yapilacak.."/>
      <Button text="Ekle" onPress={()=> handlePressed()}/>
       <TodoList todoList={todoList}/>
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