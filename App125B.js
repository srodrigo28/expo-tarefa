
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('Fulano')

  function handleMudaNome(){
    alert('teste');
    setNome('Mudei o nome')
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>{nome}</Text>

      <TouchableOpacity style={style.button} onPress={handleMudaNome}>
        <Text style={style.buttonText}>Mudar nome</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 28
  },
  title:{
    fontSize32,
    color: '#121212'
  },
  titleRead:{
    color: 'red'
  },
  button:{
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35
  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold'
  }

})