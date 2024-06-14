import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function LoginCoordenador({ navigation }) {
    return (
        <View style={styles.container}>

            <Text  style={styles.titleH1}>
                Selecione a opção que deseja coordenar
            </Text>

            <TouchableOpacity style={styles.categoryA} onPress={() => navigation.navigate('CategoriaAluno')} activeOpacity={0.7}>
            <AntDesign name="adduser" size={42} color="black" />
                <Text style={styles.title}>Aluno</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryb} onPress={() => navigation.navigate('CategoriaCotacao')} activeOpacity={0.7}>
            <AntDesign name="checkcircleo" size={42} color="black" />
                <Text style={styles.title}>Cotações</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#fff",

    },
    titleH1:{
        fontSize: 30,
        margin: 10,
        color: "#ccc",
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        margin: 10,
        color: "black",
        textAlign: 'center'
    },
    categoryA: {
        borderRadius: 5,
        width: 280,
        height: 120,
        backgroundColor: "#1e90ff",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    },
    categoryb: {
        borderRadius: 5,
        width: 280,
        height: 120,
        backgroundColor: "#1e90ff",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    },

})