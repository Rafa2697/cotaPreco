import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React from 'react';


export default function Cadastro() {
    const [ra, setRa] = React.useState(null);
    const [nome, setNome] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [confEmail, setConfEmail] = React.useState(null);
    const [senha, setSenha] = React.useState(null);

    const handleOnSubmit = async () => {
        const apiUrl = 'http://192.168.1.5/:3000/users'; // Substitua com o seu endpoint da API, não use localhost, coloque o ip da sua maquina para funcionar em emuladores e devices.
        const userData = {
            ra: ra,
            nome: nome,
            email: email,
            senha: senha
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                console.log('Dados enviados com sucesso:', jsonResponse);
                // Resetar os estados
                setRa('');
                setNome('');
                setEmail('');
                setConfEmail('');
                setSenha('');

                Alert.alert(
                    "Cadastro Solicitado",
                    "Seu cadastro foi solicitado com sucesso!",
                    [
                      { text: "OK" }
                    ],
                    { cancelable: false }
                  );
            } else {
                throw new Error('Falha ao enviar dados');
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
        }
    };


    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Solicite seu cadastro para o administrador
            </Text>
            <View style={styles.wraperInput}>
                <TextInput style={styles.input} onChangeText={setRa} value={ra} keyboardType='numeric' placeholder='RA' />

                <TextInput style={styles.input} onChangeText={setNome} value={nome} placeholder='Nome' />

                <TextInput style={styles.input} onChangeText={setEmail} value={email} keyboardType='email-address' placeholder='E-mail' />

                <TextInput style={styles.input} onChangeText={setConfEmail} value={confEmail} keyboardType='email-address' placeholder='Confirmação do E-mail' />

                <TextInput textContentType='password' onChangeText={setSenha} value={senha} style={styles.input} placeholder='Senha' />

            </View>

            <TouchableOpacity style={styles.botaoLogin} onPress={handleOnSubmit} activeOpacity={0.7}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }} >Solicitar</Text>
            </TouchableOpacity>
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