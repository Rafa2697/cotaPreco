import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Login({ navigation }) {
    const [ra, setRa] = React.useState(null)
    const [senha, setSenha] = React.useState(null)
    const [viewPass, setViewPass] = React.useState(true);

    function onViewPass() {
        setViewPass(!viewPass)
    }
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Bem vindo de volta
            </Text>
            <View style={styles.wraperInput}>
                <TextInput style={styles.input} onChangeText={setRa} value={ra} keyboardType='numeric' placeholder='RA'/>

                <View style={styles.containerInPass}>
                    <View style={styles.input}>
                        <TextInput onChangeText={setSenha} value={senha} secureTextEntry={viewPass} keyboardType='text' placeholder='Senha' />
                        <Pressable onPress={onViewPass}>
                            {viewPass == true && (<Feather name="eye" size={24} color="black" />)}
                            {viewPass == false && (<Feather name="eye-off" size={24} color="black" />)}
                        </Pressable>

                    </View>
                </View>


                {/* <PasswordInput onChangeText={setSenha} value={senha} placeholder='Senha' /> */}

                <Text style={{ textAlign: 'right', color: 'blue' }} onPress={() => navigation.navigate('Cadastro')} >Primeiro acesso ?</Text>
            </View>

            <TouchableOpacity style={styles.botaoLogin} onPress={() => navigation.navigate('Aluno')} activeOpacity={0.7}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }} >Login</Text>
            </TouchableOpacity>
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