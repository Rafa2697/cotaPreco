import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';


export default function Acougue(){
    return(
        <View style={styles.container}>
            <Text>
                Componente do Acougue
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