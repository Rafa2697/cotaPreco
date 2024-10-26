import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Pressable,  ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Login({ navigation }) {
    const [ra, setRa] = React.useState(null)
    const [senha, setSenha] = React.useState(null)
    const [viewPass, setViewPass] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    //escondendo input da senha
    function onViewPass() {
        setViewPass(!viewPass)
    }

    const handleLogin = async () => {
        setLoading(true);
        const apiUrl = 'https://api-cotapreco.onrender.com/login'; //colocar o ip da maquina para usar o emulador ou aplicação no expo. 

        const loginData = {
            ra: ra,
            senha: senha
        };
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData)
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                // Aqui você pode salvar o token de autenticação, se necessário, e navegar para a tela do aluno
                console.log('Login bem-sucedido:', jsonResponse);
                setLoading(false);
                navigation.navigate('menuAluno'); // Navega para a tela do aluno após o login bem-sucedido
            } else {
                setLoading(false);
                throw new Error('Credenciais inválidas');
            }
        } catch (error) {

            Alert.alert('Erro de Login', 'Não foi possível realizar o login. Verifique suas credenciais e tente novamente.');
            //   console.error('Erro ao tentar login:', error);
        }
    };
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Bem vindo de volta
            </Text>
            <View style={styles.wraperInput}>
                <TextInput style={styles.input} onChangeText={setRa} value={ra} keyboardType='numeric' placeholder='RA' />

                <View style={styles.containerInPass}>
                    <View style={styles.input}>
                        <TextInput onChangeText={setSenha} value={senha} secureTextEntry={viewPass} placeholder='Senha' />
                        <Pressable onPress={onViewPass}>
                            {viewPass == true && (<Feather name="eye" size={24} color="black" />)}
                            {viewPass == false && (<Feather name="eye-off" size={24} color="black" />)}
                        </Pressable>

                    </View>
                </View>


                {/* <PasswordInput onChangeText={setSenha} value={senha} placeholder='Senha' /> */}

                <Text style={{ textAlign: 'right', color: 'blue' }} onPress={() => navigation.navigate('Cadastro')} >Primeiro acesso ?</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {loading ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <TouchableOpacity style={styles.botaoLogin} onPress={handleLogin} activeOpacity={0.7}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }} >Login</Text>
                    </TouchableOpacity>
                )}
            </View>


            <Text style={{ textAlign: 'right', color: 'blue' }} onPress={() => Alert.alert('ir para tela de recuperar senha')} >Esqueci a senha</Text>
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
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#f0f8ff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
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
    containerInPass: {
        flexDirection: "row",
        alignItems: "center"
    }

})