import { StyleSheet, Text, View, FlatList } from 'react-native';
import data from '../../../services/data'
import { useState } from 'react';

export default function Padaria(){
    const [produtos, setProdutos] = useState(data);
    return(
        <View style={styles.container}>
           <FlatList
        data={produtos}
        renderItem={({ item }) => ( // Desestrutura 'item' de cada objeto renderizado
          <View style={styles.itemProduto}>
            <Text style={styles.nomeProduto}>{item.nome}</Text>
            <Text style={styles.detalhesProduto}>
              Preço: R$ {item.valor.toFixed(2)} - {item.local.nomeEstabelecimento}
            </Text>
          </View>
        )}
        keyExtractor={item => item.nome} // Extrai uma chave única para cada item
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
    itemProduto: {
        padding: 10,
        margin: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      nomeProduto: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      detalhesProduto: {
        fontSize: 16,
      },
})