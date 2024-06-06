import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';


export default function Escola(){
    return(
        <View style={styles.container}>
            <Text>
                Componente do Escola
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