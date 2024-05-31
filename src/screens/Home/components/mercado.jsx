import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react';

import dados from '../../../../data.json';


console.log(dados[0])
export default function Mercado() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {

  //     try {
  //       const response = await api.get('/clients');
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Erro ao buscar dados:', error);
  //     }
      
  //   }
  //   fetchData();
  // }, []);
  
  const [text, onChangeText] = React.useState('');

  const Item = ({id}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{id}</Text>
    </View>
  );

  console.log(text)
  return (
    <View style={styles.container}>
      
       <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Pesquise o mercado'
      />
    <FlatList
        data={dados}
        renderItem={({item}) => <Item id={item.local.nomeEstabelecimento} />}
        keyExtractor={item => item.id}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   
    justifyContent: 'space-between',
    alignItems:'center'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 357,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
  input: {
    width: 357,
    height: 64,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f0f8ff",
    marginTop:12
  },
})