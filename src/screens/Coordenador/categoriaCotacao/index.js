import { StyleSheet, Text, View } from 'react-native';


export default function CategoriaCotacao({navigation}){
    
    return(
        <View style={styles.container}>
            <Text>
                tela de onde fica as cotações solicitadas
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