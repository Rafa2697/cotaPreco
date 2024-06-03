import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react';
import api from "../../../services/api"


// console.log(dados[0])
export default function Mercado() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await api.get('/mercados');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
      
    }
    fetchData();
  }, []);
  const renderItem = ({ item }) => (
    <View style={styles.item} key={item}>
      <Text>{item.nome}</Text>
      <Text>{item.email}</Text>
    </View>
  );

  // console.log(text)
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
})