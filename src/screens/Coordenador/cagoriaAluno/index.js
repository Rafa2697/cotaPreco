import { StyleSheet, Text, View } from 'react-native';


export default function CategoriaAluno({navigation}){
    
    return(
        <View style={styles.container}>
            <Text>
                tela de onde fica a lista de alunos cadastrados e pendentes de aceite
            </Text>
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

})