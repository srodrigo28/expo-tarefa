
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App125A() {
  const [nome, setNome] = useState('Fulano')

  return (
    <View style={style.container}>
      <Text style={style.title}>Seb</Text>
      <Text style={[style.title, style.titleRead]}>Treinamentos</Text>
      <Text style={style.title}>{nome}</Text>
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
  }
})