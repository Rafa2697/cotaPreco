import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { PasswordInput } from 'react-native-password-input';

export default function Login( {navigation}) {
    const [ra, setRa] = React.useState(null)
    const [senha, setSenha] = React.useState(null)
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Bem vindo de volta
            </Text>
            <View style={styles.wraperInput}>
                <TextInput style={styles.input} onChangeText={setRa} value={ra} keyboardType='numeric' placeholder='RA' />

                <PasswordInput style={styles.input} onChangeText={setSenha} value={senha} placeholder='Senha' />

                <Text style={{textAlign:'right', color:'blue'}} onPress={() => navigation.navigate ('Cadastro')} >Primeiro acesso ?</Text>
            </View>
            
            <TouchableOpacity style={styles.botaoLogin} onPress={() => navigation.navigate('Aluno')} activeOpacity={0.7}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight:'700' }} >Login</Text>
            </TouchableOpacity>
            <Text style={{textAlign:'right', color:'blue'}} onPress={() => Alert.alert('ir para tela de recuperar senha')} >Esqueci a senha</Text>
        </View>
    )
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
        fontSize: 18,
        margin: 10,
        color: "#ccc",
        textAlign: 'justify',
        
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
    image: {
        marginTop: 70,
        width: 300,
        height: 70,
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

})