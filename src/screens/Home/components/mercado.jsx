import { StyleSheet, Text, View, FlatList} from 'react-native'
import React, { useState, useEffect } from 'react';
import Api from "../../../services/api";


export default function Mercado() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Api.get(`/api/taxas/v1`);
        
        setDados(response.data);
        console.log(dados)
      } catch (error) {
        console.error('Erro ao buscar dados dos clientes:', error);
      }
    }

    fetchData();
  }, []);
  
  const Item = ({nome, valor}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{nome}</Text>
      <Text style={styles.title}>{valor}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Text>{pessoas.nome}</Text>  */}
      <FlatList
        data={dados}
        renderItem={({item}) => <Item nome={item.nome} valor={item.valor} />}
        keyExtractor={item => item.nome}
      />
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  item: {
    backgroundColor: '#425ae0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color:'black'
  },
})