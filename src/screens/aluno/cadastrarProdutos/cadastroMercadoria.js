import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function CadastroMercadoria({ navigation }) {
    const [categoria, setCategoria] = useState('');
    const [cidade, setCidade] = useState('');
    const [mercado, setMercado] = useState('');
    const [produto, setProduto] = useState('');
    const [preco, setPreco] = useState('');

    const handleSubmit = () => {
        // Here you'll implement the API call to save the product
        const data = {
            categoria,
            cidade,
            estabelecimento: mercado,
            nome: produto,
            valor: Number(preco)
        };
        
        console.log(data);
        // Clear fields after submission
        setCategoria('');
        setCidade('');
        setMercado('');
        setProduto('');
        setPreco('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Mercadorias</Text>
            
            <View style={styles.wraperInput}>
                <TextInput 
                    style={styles.input} 
                    placeholder='Categoria'
                    value={categoria}
                    onChangeText={setCategoria}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='Cidade'
                    value={cidade}
                    onChangeText={setCidade}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='Mercado'
                    value={mercado}
                    onChangeText={setMercado}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='Nome do produto'
                    value={produto}
                    onChangeText={setProduto}
                />
                <TextInput 
                    style={styles.input} 
                    placeholder='Preço'
                    value={preco}
                    onChangeText={setPreco}
                    keyboardType="numeric"
                />
            </View>
            
            <TouchableOpacity 
                style={styles.botaoLogin} 
                onPress={handleSubmit}
                activeOpacity={0.7}
            >
                <Text style={styles.buttonText}>Cadastrar Produto</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: '100%',
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    wraperInput: {
        gap: 24,
    },
    title: {
        fontSize: 24,
        margin: 10,
        color: "#505059",
        fontWeight: "bold"
    },
    input: {
        width: 357,
        height: 64,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#f0f8ff"
    },
    botaoLogin: {
        borderRadius: 5,
        width: 260,
        height: 60,
        backgroundColor: "#1e90ff",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    }
});