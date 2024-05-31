import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

export default function CategoriaAluno({ navigation }) {
    const DadosAlunos = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            nome: 'Rafael De Mattos',
            CPF: '1010101001010',
            RA: '0383838',
            DataSolicitacao: '25/05/2024',
            Status: true,
        },
        {
            id: '123e4567-e89b-12d3-a456-426655440000',
            nome: 'Ana Souza',
            CPF: '78945612300',
            RA: '038456',
            DataSolicitacao: '02/06/2024',
            Status: true,
        },
        {
            id: '78c6b345-231a-4f9b-b12c-c75d73124000',
            nome: 'Pedro Silva',
            CPF: '12378945610',
            RA: '0398765',
            DataSolicitacao: '01/06/2024',
            Status: false,
        },

        {
            id: 1,
            nome: "Maria Silva",
            CPF: "04234567890",
            RA: "012345",
            dataSolicitacao: "22/04/2024",
            status: false,
        },
        {
            id: 2,
            nome: "João Oliveira",
            CPF: "34567890123",
            RA: "012346",
            dataSolicitacao: "15/05/2024",
            status: true,
        },
        {
            id: 3,
            nome: "Pedro Souza",
            CPF: "67890123456",
            RA: "012347",
            dataSolicitacao: "08/04/2024",
            status: false,
        },
        {
            id: 4,
            nome: "Ana Gomes",
            CPF: "90123456789",
            RA: "012348",
            dataSolicitacao: "29/03/2024",
            status: true,
        },
        {
            id: 5,
            nome: "Carlos Santos",
            CPF: "12345678901",
            RA: "012349",
            dataSolicitacao: "12/05/2024",
            status: false,
        },
        {
            id: 6,
            nome: "Luisa Mendes",
            CPF: "23456789012",
            RA: "012350",
            dataSolicitacao: "05/04/2024",
            status: true,
        },
        {
            id: 7,
            nome: "Bruno Cardoso",
            CPF: "34567890123",
            RA: "012351",
            dataSolicitacao: "26/03/2024",
            status: false,
        },
        {
            id: 8,
            nome: "Gabriela Ferreira",
            CPF: "45678901234",
            RA: "012352",
            dataSolicitacao: "19/05/2024",
            status: true,
        },
        {
            id: 9,
            nome: "Rafael Marques",
            CPF: "56789012345",
            RA: "012353",
            dataSolicitacao: "10/04/2024",
            status: false,
        },
        {
            id: 10,
            nome: "Amanda Araujo",
            CPF: "67890123456",
            RA: "012354",
            dataSolicitacao: "03/04/2024",
            status: true,
        },
        {
            id: 11,
            nome: "Eduardo Campos",
            CPF: "78901234567",
            RA: "012355",
            dataSolicitacao: "24/05/2024",
            status: false,
        },
        {
            id: 12,
            nome: "Juliana Nunes",
            CPF: "89012345678",
            RA: "012356",
            dataSolicitacao: "17/04/2024",
            status: true,
        },
        {
            id: 13,
            nome: "Leonardo Teixeira",
            CPF: "90123456789",
            RA: "012357",
            dataSolicitacao: "07/04/2024",
            status: false,
        },

    ];

    const [text, onChangeText] = React.useState('');

    const Item = ({ nome, RA, CPF }) => (
        <View style={styles.item}>
            <AntDesign name="checkcircle" size={28} color="green" />
            <View>
                <Text style={styles.titletextList}>{nome}</Text>
                <Text style={styles.textList}>RA: {RA}</Text>
                <Text style={styles.textList}>CPF: {CPF}</Text>
            </View>
            <AntDesign name="close" size={28} color="red" />

        </View>
    );


    return (
        <View style={styles.container}>
              <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Pesquise o nome do aluno'

      />
            <FlatList
                style={styles.lista}
                data={DadosAlunos}
                renderItem={({ item }) => (
                    <Item nome={item.nome} RA={item.RA} CPF={item.CPF} />
                )}

                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",

    },
    item: {
        backgroundColor: '#B4BDC4',
        padding: 20,
        marginVertical: 8,
        alignItems: 'center',
        flexDirection:'row',
        marginHorizontal: 16,
        justifyContent: 'space-between',
        alignContent: 'center',
        borderRadius: 10
    },
    lista: {
        alignContent: 'center',
        marginVertical: 8,
        width: '100%'

    },
    titletextList:{
        fontSize:24,
        fontWeight:'bold'
    },
    input: {
        width: 370,
        marginTop:16,
        height: 64,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#f0f8ff",
      },
    textList: {
        fontSize: 22,
    }

})