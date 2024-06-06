import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';


export default function Construcao(){
    return(
        <View style={styles.container}>
            <Text>
                Componente do Construcao
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})