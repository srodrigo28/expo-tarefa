
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import Tarefa from './src/Tarefa';

export default function App() {
  const [tarefa, setTarefa] = useState('')
  const [list, setList] = useState([]);
  
  function handleAdd(){
    if(tarefa === ''){
      return;
    }

    const dados = {
      key: Date.now(),
      item: tarefa
    }

    setList(oldArray => [dados, ...oldArray]);
    setTarefa('')

  }
  function handleDelete(){
    // console.log(item);

    let filtroItem = list.filter((tarefa) => {
      return(tarefa.item !== item)
    })

    setList(filtroItem)
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Tarefas</Text>
      
      <View style={style.containerInput}>
        <TextInput
          placeholder='Digite sua tarefa...'
          style={style.input}
          value={tarefa}
          //onChangeText={setTarefa}
          onChangeText={ (text) => setTarefa(text) }
        />
        <TouchableOpacity style={style.buttonAdd} onPress={handleAdd}>
          <FontAwesome name='plus' size={25} color='#fff' />
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        keyExtractor={ (item) => item.key }
        renderItem={ ({ item }) => <Tarefa data={item} deleteItem={ () => handleDelete(item.item)} /> }
        style={style.list}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22272E',
    paddingTop: 28,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    marginTop: '5%',
    paddingStart: '5%',
    marginBottom: 12,
  },
  containerInput:{
    flexDirection: 'row',
    width: '95%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  input:{
    width: '75%',
    backgroundColor: '#FBFBFB',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  buttonAdd:{
    width: '15%',
    height: 44,
    backgroundColor: '#73f7ff',
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  list:{
    flex: 1,
    backgroundColor: '#fff',
    paddingStart: '4%',
    paddingEnd: '4%',
    paddingEnd: 12,
  }
})