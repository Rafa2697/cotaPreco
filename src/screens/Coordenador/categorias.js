import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function LoginCoordenador({ navigation }) {
    return (
        <View style={styles.container}>

            <Text  style={styles.titleH1}>
                Selecione a opção que deseja coordenar
            </Text>

            <TouchableOpacity style={styles.categoryA} onPress={() => navigation.navigate('CategoriaAluno')} activeOpacity={0.7}>
            <AntDesign name="adduser" size={32} color="#ccc" />
                <Text style={styles.title}>Aluno</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.categoryb} onPress={() => navigation.navigate('CategoriaCotacao')} activeOpacity={0.7}>
            <AntDesign name="checkcircleo" size={32} color="#ccc" />
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
        fontSize: 28,
        margin: 10,
        color: "#fff",
        textAlign: 'center'
    },
    categoryA: {
        backgroundColor: 'blue',
        width: '80%',
        height: '12%',
        borderRadius: 18,
        justifyContent: 'center',
        flexDirection:'row',
        alignItems:'center',
        elevation: 5,
    },
    categoryb: {
        backgroundColor: 'green',
        width: '80%',
        height: '12%',
        borderRadius: 18,
        justifyContent: 'center',
        flexDirection:'row',
        alignItems:'center',
        elevation: 5,
    },

})