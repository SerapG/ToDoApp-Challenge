import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import InputComponent from '@/components/InputComponent'
import Button from '@/components/Button'
import { useState,useEffect } from 'react'
import TodoList from '@/components/TodoList'
import AsyncStorage from '@react-native-async-storage/async-storage'


const KEY_TODO_LIST = "todos"
const KEY_CURRENT_TODO = "current_todo"

const index = () => {
    const [todoList,setTodolist] = useState<string[]>([])
    const [todo , setTodo]= useState("")

    useEffect(() => {
    async function getTodos() { 
    const todos = await AsyncStorage.getItem(KEY_TODO_LIST)
        if (todos !== null){
            setTodolist(JSON.parse(todos))
        }
    }

    async function getCurrentTodo() {
        const todo = await AsyncStorage.getItem(KEY_CURRENT_TODO)
        if (todo !== null){
            setTodo(todo)
        }
    }
    getTodos()
    getCurrentTodo()
}, [])
    

    const saveTodosToStorage = async(newList:string[]) => {
        const jsonValue = JSON.stringify(newList)
        await AsyncStorage.setItem(KEY_TODO_LIST,jsonValue)
    }

    const handlePressed =  () => {
        const newList = [...todoList, todo]
        setTodolist(newList)
        setTodo("");
        saveTodosToStorage(newList)
    }

    const handleDelete =  (deletedTodo:string) => {
        const newList = todoList.filter(todo => todo !== deletedTodo)
        setTodolist(newList)
        saveTodosToStorage(newList)
    }

    const handleSetTodo = async(text:string) => {
        setTodo(text)
        await AsyncStorage.setItem(KEY_CURRENT_TODO,text)
    }

  return (
    <View style={styles.container} >
      <InputComponent value={todo} onChangeText={handleSetTodo} placeholder="yapilacak.."/>
      <Button text="Ekle" onPress={()=> handlePressed()}/>
       <TodoList onDelete={handleDelete} todoList={todoList}/>
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