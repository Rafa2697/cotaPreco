import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';


export default function Cadastro(){
    return(
        <View style={styles.container}>

            <Text style={styles.title}>
                Solicite seu cadastro para o administrador
            </Text>
            <View style={styles.wraperInput}>
                <TextInput style={styles.input} placeholder='RA' />
                <TextInput style={styles.input} placeholder='Nome' />
                <TextInput style={styles.input} placeholder='E-mail' />
                
            </View>
            
            <Pressable style={styles.botaoLogin} onPress={() => Alert.alert('Cadastro solicitado, aguarde o email de confirmação com login e senha.')}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight:'700' }} >Solicitar</Text>
            </Pressable>
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