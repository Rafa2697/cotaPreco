
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';



export default function Start({ navigation }) {
    return (

        <View style={[styles.container]}>

            <Image style={styles.image} source={require("../../../assets/ip_fvr_branco.png")} />
            <Text style={styles.title}>
                O IP-FVR (Índice de preços), foi desenvolvido para os alunos do curso de Ciências Contábeis da UNIVR, fazerem cotações mensais.
            </Text>
            <View style={styles.wraperBotao}>
                <Pressable style={styles.botaoLogin} onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: 'white', fontSize: 20 }} >Login</Text>
                </Pressable>
                <Pressable style={styles.botaoRegister} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={{ color: '#1e90ff', fontSize: 20 }}>Cadastro</Text>
                </Pressable>
            </View>
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
        backgroundColor: "#25328A",

    },
    wraperBotao: {
        flexDirection: "row",
        gap: 12,

    },
    title: {
        fontSize: 18,
        margin: 10,
        color: "#fff",
        textAlign: 'justify',
    },
    image: {
        marginTop: 70,
        width: 300,
        height: 70,
    },
    botaoLogin: {
        borderRadius: 5,
        width: 160,
        height: 60,
        backgroundColor: "#1e90ff",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
    botaoRegister: {
        borderRadius: 5,
        width: 160,
        height: 60,
        backgroundColor: "#f0f8ff",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    }

})