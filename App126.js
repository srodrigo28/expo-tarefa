
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

export default function App126() {
  const [tarefa, setTarefa] = useState('')
  
  function handleAdd(){
    alert('teste')
    alert(tarefa)
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
          <FontAwesome name='plus' size={20} color='#fff' />
        </TouchableOpacity>
      </View>
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
    width: '100%',
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
  }
})